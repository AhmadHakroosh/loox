import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CardProps {
  id: number;
  name: string;
  description: string;
  img: string;
}

export const Card: FC<CardProps> = ({ id, name, description, img }) => {
  return (
    <Link href={`/article/${id}`}>
      <div className="flex items-center gap-4 mx-auto mb-4 p-4 overflow-hidden bg-white rounded-lg shadow-lg">
        <Image
          className="w-24 h-24 rounded-lg"
          src={img}
          alt={name}
          width={300}
          height={300}
        />
        <div className="w-2/3">
          <h1 className="mb-2 text-xl font-semibold text-gray-900">
            {name}
          </h1>
          <p className="text-base text-gray-800 truncate">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
