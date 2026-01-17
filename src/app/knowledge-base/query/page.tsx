import Link from "next/link";
import {
  ChevronRightIcon,
  SparklesIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { QueryInterface } from "@/components/knowledge-base";

export const metadata = {
  title: "Ask the Knowledge Base | HISAGEN",
  description:
    "Ask natural language questions about HISAGEN project intelligence",
};

export default function QueryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <Link
              href="/knowledge-base"
              className="hover:text-emerald-600 transition-colors"
            >
              Knowledge Base
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="text-slate-900 font-medium">Ask</span>
          </nav>

          {/* Title */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg">
              <SparklesIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Ask the Knowledge Base
              </h1>
              <p className="text-slate-600 mt-1">
                Use natural language to query HISAGEN project intelligence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Info Banner */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
          <InformationCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-blue-800">
            <p className="font-medium">AI-Powered Search</p>
            <p className="mt-1">
              Ask questions in plain English. The AI will search the knowledge
              base and synthesize an answer based on relevant entries including
              communications, research, evidence, milestones, and ecosystem
              partners.
            </p>
            <p className="mt-2 text-blue-700">
              <span className="font-medium">Note:</span> Each question is independent—the AI has no memory of previous queries. Ask complete questions rather than follow-ups like "tell me more."
            </p>
          </div>
        </div>

        {/* Query Interface */}
        <QueryInterface />

        {/* How It Works */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-2xl font-bold text-emerald-600 mb-2">1</div>
              <h3 className="font-medium text-slate-900 mb-1">Ask a Question</h3>
              <p className="text-sm text-slate-600">
                Type your question in natural language, just like asking a
                colleague.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-2xl font-bold text-emerald-600 mb-2">2</div>
              <h3 className="font-medium text-slate-900 mb-1">AI Searches KB</h3>
              <p className="text-sm text-slate-600">
                The system finds relevant entries across all knowledge base
                categories.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-2xl font-bold text-emerald-600 mb-2">3</div>
              <h3 className="font-medium text-slate-900 mb-1">
                Synthesized Answer
              </h3>
              <p className="text-sm text-slate-600">
                Get a clear answer with references to the source entries for
                verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
