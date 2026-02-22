import { IMAGE_BASE_URL } from "@/utils/constants";
import React from "react";
import { CuisinesList } from "../utility/reusableComponents";

interface Collection {
  id: number;
  title: string;
  places: number;
  image: string;
}

const ChevronRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const CollectionCard: React.FC<{ collection: any }> = ({
  collection,
}) => {
  console.log(collection);

  const { name, mediaFiles, cuisines } = collection?.info;
  const image = IMAGE_BASE_URL + mediaFiles[0]?.url;

  return (
    <a
      href="#"
      className="group relative shrink-0 w-full h-80 rounded-xl overflow-hidden cursor-pointer block"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 ">
        <h3 className="text-white font-bold text-lg leading-tight mb-1">
          {name}
        </h3>
        <div className=" text-white/85 text-sm font-medium">
          <CuisinesList data={cuisines} />
          <div className="flex items-center gap-1">
            <span>{collection.places} Places</span>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </a>
  );
};
