"use client";
import { IMAGE_BASE_URL } from "@/utils/constants";
import Image from "next/image";
import React, {
  ElementType,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ArrowButton from "../../common/buttons/ArrowButton";
import { UseHorizontalScrollHook } from "@/utils/hooks/UseHorizontalScrollHook";

const CategorySection = ({ data }: { data: any }) => {
  const { scrollRef, isScrollStart, isScrollEnd, scroll, checkScrollPosition } =
    UseHorizontalScrollHook();
  const categories = useMemo(
    () => data?.cards[3]?.card?.card?.imageGridCards?.info,
    [data],
  );

  if (!categories || categories.length == 0) return <></>;
  return (
    <div className="container category-section pb-5 ">
      <div className="section-heading pb-4">What's on your mind?</div>

      <div className="relative w-full ">
        <div className="h-full w-[110%] flex items-center justify-between absolute inset-0 left-1/2 -translate-x-1/2 ">
          <ArrowButton
            btn={"prev"}
            direction="left"
            onclick={scroll}
            disabled={isScrollStart}
          />
          <ArrowButton
            btn={"next"}
            direction="right"
            onclick={scroll}
            disabled={isScrollEnd}
          />
        </div>
        <div
          ref={scrollRef}
          onScroll={checkScrollPosition}
          className="z-1 pb-4 -ms-5 6 flex wfull overflow-x-auto no-scrollbar scroll-smooth snap-x"
        >
          {categories?.map((itm: any, index: number) => {
            const imgId = itm?.imageId;
            return (
              <div
                key={index}
                className="relative w-38 shrink-0 flex items-center justify-center snap-center md:snap-start "
              >
                <Image
                  src={IMAGE_BASE_URL + imgId}
                  alt="image"
                  className="inset-0 w-full h-full"
                  width={"100"}
                  height={100}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(CategorySection);

{
  /* <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#2D3436]">
          Browse by <span className="text-[#EF4F5F]">Category</span>
        </h2>
        <p className="text-[#636E72] mt-2">Explore the best flavors in town</p>
      </div> */
}
