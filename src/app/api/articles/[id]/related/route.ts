import { data } from "@/data";
import { NextRequest, NextResponse } from "next/server";

interface RequestParams {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: RequestParams) {
  const { id } = params;

  const articles = data
    .filter((article) => article.id !== Number(id))
    .map((article) => ({
      ...article,
      description: article.description.slice(0, 100) + "...",
    }));

  return NextResponse.json(articles);
}