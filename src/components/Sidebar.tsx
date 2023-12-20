"use client";

import { useArticles } from "@/providers";
import { FC } from "react";
import { Card } from "./Card";

export const Sidebar: FC = () => {
  const { relatedArticles } = useArticles();

  return (
    <div>
      <div className="px-6">
        <h2>More stuff</h2>
      </div>
      <ul className="p-6">
        {relatedArticles.map((article) => (
          <li key={article.id}>
            <Card {...article} />
          </li>
        ))}
      </ul>
    </div>
  );
};
