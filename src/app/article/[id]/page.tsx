import { Article, Sidebar } from "@/components";
import { data } from "@/data";
import { FC } from "react";

interface ArticlePageProps {
  params: {
    id: number;
  };
}

const getArticleById = (id: number) => data.find((article) => article.id === id);

const ArticlePage: FC<ArticlePageProps> = ({ params }) => {
  const { id } = params;
  const article = getArticleById(Number(id));

  return (
    <div className="relative isolate overflow-hidden bg-white p-6 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-8 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
          <Article {...article} />
        </div>
        <div className="lg:sticky lg:top-0 lg:col-start-6 lg:col-span-3 lg:overflow-hidden">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default ArticlePage;
