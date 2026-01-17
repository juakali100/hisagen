"use client";

import { SelectionProvider, SelectionToolbar } from "../../components/knowledge-base";

export default function KnowledgeBaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SelectionProvider>
      {children}
      <SelectionToolbar />
    </SelectionProvider>
  );
}
