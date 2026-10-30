import React from "react";

interface SEOContentBlockProps {
  title: string;
  paragraphs: string[];
}

export default function SEOContentBlock({ title, paragraphs }: SEOContentBlockProps) {
  return (
    <div className="mt-8 border-t border-border pt-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">{title}</h2>
      <div className="max-w-none text-foreground/70 space-y-4 text-lg">
        {paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed">{p}</p>
        ))}
      </div>
    </div>
  );
}
