import React, { memo, useMemo } from "react";
import { MdStars } from "react-icons/md";
import CheckIcon from "@/assets/icons/dineout-icon.avif";
import Image from "next/image";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { BsDot } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { IMAGE_BASE_URL } from "@/utils/constants";
import { CuisinesList } from "../utility/reusableComponents";

const PopularProductCard = ({ data }: { data: any }) => {
  //   const popularData = useMemo(() => data?.cards[5], [data]);
  const { mediaFiles, name, rating, locationInfo, cuisines, offerInfoV3 } =
    data?.info;
  const bgImg = IMAGE_BASE_URL + mediaFiles[0]?.url;

  return (
    <div className="popular-card shrink-0">
      <div className="">
        <div
          className="top-area relative"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className=" overlay" />
          <div className="z-2 w-full h-max flex items-end justify-between px-3.5 pb-2 font-semibold text-white">
            <p className="text-xl">{name}</p>
            <div className="flex items-center gap-1 text-sm">
              <div className="bg-[#1D923C] rounded-full pt-0 size-4 flex items-center justify-center">
                <FaStar className="text-[10px] " />
              </div>
              {rating?.value}
            </div>
          </div>
        </div>
        <div className="bottom-area ">
          <div className="prop-flex ">
            {/* Asia <BsDot className="text-xl -mx-1" /> Chinese */}
            <CuisinesList data={cuisines} />
            <p>₹2500 for two</p>
          </div>
          <div className="prop-flex">
            <p>{locationInfo?.formattedAddress}</p>
            <p>{locationInfo?.distanceString}</p>
          </div>
          <div className="inline-flex my-2.5 px-3.5 py-1 rounded-full items-center bg-[#f0f0f5]">
            <Image
              src={CheckIcon}
              alt="check-icon"
              className="size-3.25 me-0.5"
            />
            Table booking
          </div>
          <div className="prop-flex major-div">
            <div className="flex items-center gap-1">
              <LiaCheckDoubleSolid />
              <span>Rush-hour access</span>
            </div>
            <div>+1 more</div>
          </div>
          <div className="minor-div">Up to 10% off with bank offers</div>
          <div className="pt-2.5 ps-1 text-[#5134b6]">
            {offerInfoV3?.couponOffer?.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PopularProductCard);

// <div className="popular-card">
//   <div>
//     <div className="top-area relative">
//       <div className=" overlay" />
//       <div className="z-2 w-full flex items-end justify-between px-3.5 pb-2 font-semibold text-white">
//         <p className="text-xl">Haveli Dharampura</p>
//         <div className="flex items-center gap-1 text-sm">
//           <div className="bg-[#1D923C] rounded-full pt-0 size-4 flex items-center justify-center">
//             <FaStar className="text-[10px] " />
//           </div>
//           4.3
//         </div>
//       </div>
//     </div>
//     <div className="bottom-area ">
//       <div className="prop-flex">
//         <div className="flex items-center ">
//           Asia <BsDot className="text-xl -mx-1" /> Chinese
//         </div>
//         <p>₹2500 for two</p>
//       </div>
//       <div className="prop-flex">
//         <p>Greater Kailash, Delhi</p>
//         <p>11.3 km</p>
//       </div>
//       <div className="inline-flex my-2.5 px-3.5 py-1 rounded-full items-center bg-[#f0f0f5]">
//         <Image
//           src={CheckIcon}
//           alt="check-icon"
//           className="size-3.25 me-0.5"
//         />
//         Table booking
//       </div>
//       <div className="prop-flex major-div">
//         <div className="flex items-center gap-1">
//           <LiaCheckDoubleSolid />
//           <span>Rush-hour access</span>
//         </div>
//         <div>+1 more</div>
//       </div>
//       <div className="minor-div">Up to 10% off with bank offers</div>
//     </div>
//   </div>
// </div>
