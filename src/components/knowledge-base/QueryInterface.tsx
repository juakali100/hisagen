"use client";

import { useState } from "react";
import {
  MagnifyingGlassIcon,
  SparklesIcon,
  DocumentTextIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { entryTypeColors } from "@/types/knowledge-base";

type RelevantEntry = {
  id: string;
  type: string;
  title: string;
  date: string;
};

type QueryResponse = {
  answer: string;
  relevantEntries: RelevantEntry[];
  usage: {
    inputTokens: number;
    outputTokens: number;
  };
};

const exampleQuestions = [
  "What is the status of the Uganda pilot?",
  "Who is Locus AG and what's our relationship?",
  "What yield improvements have we seen in trials?",
  "Summarize recent program updates",
  "What are the key milestones for 2026?",
];

export default function QueryInterface() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<QueryResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question.trim() }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to process query");
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (example: string) => {
    setQuestion(example);
  };

  return (
    <div className="space-y-6">
      {/* Query Input */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <SparklesIcon className="h-5 w-5 text-emerald-500" />
          </div>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question about the knowledge base..."
            className="block w-full pl-12 pr-4 py-4 text-lg border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white shadow-sm"
            disabled={isLoading}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={!question.trim() || isLoading}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <>
                <ArrowPathIcon className="h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <MagnifyingGlassIcon className="h-5 w-5" />
                Ask Question
              </>
            )}
          </button>

          {response?.usage && (
            <span className="text-xs text-slate-400">
              Tokens: {response.usage.inputTokens} in /{" "}
              {response.usage.outputTokens} out
            </span>
          )}
        </div>
      </form>

      {/* Example Questions */}
      {!response && !isLoading && (
        <div className="bg-slate-50 rounded-xl p-6">
          <h3 className="text-sm font-medium text-slate-700 mb-3">
            Try asking:
          </h3>
          <div className="flex flex-wrap gap-2">
            {exampleQuestions.map((example, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(example)}
                className="inline-flex items-center px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {/* Response Display */}
      {response && (
        <div className="space-y-6">
          {/* Answer */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <SparklesIcon className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Answer</h3>
            </div>
            <div className="prose prose-slate max-w-none">
              {response.answer.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-3 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Referenced Entries */}
          {response.relevantEntries.length > 0 && (
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <DocumentTextIcon className="h-5 w-5 text-slate-500" />
                <h3 className="text-sm font-medium text-slate-700">
                  Referenced Entries ({response.relevantEntries.length})
                </h3>
              </div>
              <div className="grid gap-2">
                {response.relevantEntries.map((entry) => {
                  const colors =
                    entryTypeColors[
                      entry.type as keyof typeof entryTypeColors
                    ] || entryTypeColors.communication;
                  return (
                    <a
                      key={entry.id}
                      href={`/knowledge-base/${entry.type === "communication" ? "communications" : entry.type === "ecosystem" ? "ecosystem" : entry.type}`}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-emerald-300 transition-colors"
                    >
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs font-medium rounded ${colors.bg} ${colors.text}`}
                      >
                        {entry.type}
                      </span>
                      <span className="flex-1 text-sm text-slate-700 truncate">
                        {entry.title}
                      </span>
                      <span className="text-xs text-slate-400">
                        {entry.date}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Ask Another */}
          <div className="text-center">
            <button
              onClick={() => {
                setQuestion("");
                setResponse(null);
              }}
              className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Ask another question
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
