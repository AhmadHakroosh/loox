"use client";

import { FC, createContext, useContext, useEffect, useState } from "react";
import { data } from "@/data";
import { usePathname } from "next/navigation";

interface Article {
  id: number;
  name: string;
  description: string;
  img: string;
}

interface ArticlesProviderProps {
  children: React.ReactNode;
}

interface ArticlesContextValue {
  articles: Article[];
  relatedArticles: Article[];
  getArticleById: (id: number) => Article | undefined;
}

export const ArticlesContext = createContext<ArticlesContextValue>({
  articles: data,
  relatedArticles: [],
  getArticleById: () => undefined,
});

export const useArticles = () => useContext(ArticlesContext);

export const ArticlesProvider: FC<ArticlesProviderProps> = ({ children }) => {
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  const path = usePathname();

  const fetchRelatedArticles = async (id: number) => {
    const response = await fetch(`/api/articles/${id}/related`);
    const articles = await response.json();
    setRelatedArticles(articles);
  };

  const articlesContextValue: ArticlesContextValue = {
    articles: data,
    relatedArticles,
    getArticleById: (id: number) => {
      fetchRelatedArticles(id);
      return data.find((article) => article.id === id);
    },
  };

  useEffect(() => {
    const id = Number(path.split("/").pop());
    fetchRelatedArticles(id);
  }, [path]);

  return (
    <ArticlesContext.Provider value={articlesContextValue}>
      {children}
    </ArticlesContext.Provider>
  );
};
