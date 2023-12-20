"use client";

import { classNames } from "@/utils/helpers";
import Image from "next/image";
import { FC, Fragment, useState } from "react";

interface ArticleProps {
  id?: number;
  name?: string;
  description?: string;
  img?: string;
}

export const Article: FC<ArticleProps> = ({ id, name, description, img }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const readMore = () => setExpanded(true);

  return id ? (
    <div className={classNames("relative h-screen", expanded ? "overflow-auto" : "overflow-hidden")}>
      <article className="h-full">
        <div className="h-full grid grid-cols-1 lg:grid-cols-3">
          <div className="w-full lg:pr-4 mb-4 lg:row-span-2">
            {img && <Image className="w-full rounded-md" src={img} alt={name || "article thubnail"} width={150} height={150} />}
          </div>
          <div className="lg:col-span-2">
            <h1 className="font-bold text-2xl">{name}</h1>
          </div>
          <div className="lg:col-start-2 lg:col-span-2 h-full">
            <p>{description}</p>
          </div>
        </div>
      </article>
      {!expanded && (
        <div className="absolute flex bottom-0 lg:bottom-6 w-full transition-all duration-75">
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-start-2 lg:col-span-2 pb-4 pt-32 text-center bg-gradient-to-t from-white to-transparent">
              <button onClick={readMore} className="px-4 py-2 text-gray-900 bg-white border border-gray-100 rounded-full text-sm">
                Read more
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : null;
}
