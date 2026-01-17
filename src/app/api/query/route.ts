// HISAGEN Knowledge Base - LLM Query API Route
// Handles natural language queries against the knowledge base

import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import {
  communications,
  research,
  evidence,
  milestones,
  ecosystem,
} from "@/data";
import type { KnowledgeEntry, Metric } from "@/types/knowledge-base";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Format entries for context
function formatEntriesForContext(entries: KnowledgeEntry[]): string {
  return entries
    .map((entry) => {
      let details = `[${entry.type.toUpperCase()}] ${entry.title}\nDate: ${entry.date}\nSummary: ${entry.summary}`;

      if (entry.tags.length > 0) {
        details += `\nTags: ${entry.tags.join(", ")}`;
      }

      // Add type-specific details
      if (entry.type === "communication") {
        details += `\nFrom: ${entry.from}`;
        details += `\nTo: ${Array.isArray(entry.to) ? entry.to.join(", ") : entry.to}`;
        if (entry.synthesis?.length > 0) {
          details += `\nKey Points:\n${entry.synthesis.map((s: string) => `  - ${s}`).join("\n")}`;
        }
      } else if (entry.type === "research") {
        if (entry.synthesis?.length > 0) {
          details += `\nKey Findings:\n${entry.synthesis.map((s: string) => `  - ${s}`).join("\n")}`;
        }
      } else if (entry.type === "evidence") {
        if (entry.project) details += `\nProject: ${entry.project}`;
        if (entry.metrics?.length > 0) {
          details += `\nMetrics:\n${entry.metrics.map((m: Metric) => `  - ${m.label}: ${m.value}${m.unit ? ` ${m.unit}` : ""}${m.change ? ` (${m.change})` : ""}`).join("\n")}`;
        }
      } else if (entry.type === "milestone") {
        details += `\nStatus: ${entry.status}`;
        if (entry.outcome) details += `\nOutcome: ${entry.outcome}`;
      } else if (entry.type === "ecosystem") {
        details += `\nOrganization: ${entry.organization}`;
        details += `\nRelationship: ${entry.relationship}`;
        details += `\nEngagement: ${entry.engagement}`;
      }

      return details;
    })
    .join("\n\n---\n\n");
}

// Find relevant entries based on keywords
function findRelevantEntries(
  query: string,
  allEntries: KnowledgeEntry[]
): KnowledgeEntry[] {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter((w) => w.length > 2);

  // Score each entry based on relevance
  const scored = allEntries.map((entry) => {
    let score = 0;
    const searchText = [
      entry.title,
      entry.summary,
      ...entry.tags,
      entry.type,
      entry.project || "",
    ]
      .join(" ")
      .toLowerCase();

    // Check for word matches
    queryWords.forEach((word) => {
      if (searchText.includes(word)) score += 1;
      if (entry.title.toLowerCase().includes(word)) score += 2;
      if (entry.tags.some((t: string) => t.toLowerCase().includes(word))) score += 1.5;
    });

    // Check type-specific fields
    if (entry.type === "communication") {
      const commText = [
        entry.from,
        Array.isArray(entry.to) ? entry.to.join(" ") : entry.to,
        ...(entry.synthesis || []),
      ]
        .join(" ")
        .toLowerCase();
      queryWords.forEach((word) => {
        if (commText.includes(word)) score += 1;
      });
    }

    return { entry, score };
  });

  // Return entries with score > 0, sorted by score
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 15) // Limit to top 15 relevant entries
    .map((s) => s.entry);
}

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Gather all entries
    const allEntries: KnowledgeEntry[] = [
      ...communications,
      ...research,
      ...evidence,
      ...milestones,
      ...ecosystem,
    ];

    // Find relevant entries
    const relevantEntries = findRelevantEntries(question, allEntries);

    // If no relevant entries found, use recent entries as context
    const contextEntries =
      relevantEntries.length > 0
        ? relevantEntries
        : allEntries
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 10);

    const context = formatEntriesForContext(contextEntries);

    // Build the prompt
    const systemPrompt = `You are a helpful assistant for the HISAGEN Knowledge Base. HISAGEN is a biochar and soil carbon project focused on sustainable agriculture in Uganda.

Your role is to answer questions about the project based on the knowledge base entries provided. Be concise, accurate, and cite specific entries when relevant.

If the question cannot be answered from the available information, say so clearly. Do not make up information.

When referencing entries, mention them by their title and type (e.g., "According to the communication 'Email from Keir to Locus CEO'...").`;

    const userPrompt = `Here are the relevant knowledge base entries:

${context}

---

Question: ${question}

Please provide a helpful answer based on the knowledge base entries above. If you reference specific entries, mention which ones.`;

    // Call Claude API
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
      system: systemPrompt,
    });

    // Extract text response
    const responseText =
      message.content[0].type === "text" ? message.content[0].text : "";

    return NextResponse.json({
      answer: responseText,
      relevantEntries: contextEntries.map((e) => ({
        id: e.id,
        type: e.type,
        title: e.title,
        date: e.date,
      })),
      usage: {
        inputTokens: message.usage.input_tokens,
        outputTokens: message.usage.output_tokens,
      },
    });
  } catch (error) {
    console.error("Query API error:", error);
    return NextResponse.json(
      { error: "Failed to process query" },
      { status: 500 }
    );
  }
}
