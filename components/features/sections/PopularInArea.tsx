import React, { memo, useMemo } from "react";
import CheckIcon from "@/assets/icons/dineout-icon.avif";
import Image from "next/image";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { IMAGE_BASE_URL } from "@/utils/constants";
import PopularProductCard from "../../common/cards/PopularProductCard";
import ArrowButton from "../../common/buttons/ArrowButton";
import { GrPrevious } from "react-icons/gr";
import { UseHorizontalScrollHook } from "@/utils/hooks/UseHorizontalScrollHook";

const data = [
  {
    info: {
      id: "637431",
      name: "Cakello",
      rating: {
        value: "4.0",
        count: 17671,
        countDescription: "17K+ Google ratings",
      },
      costForTwo: "₹500 for two",
      cuisines: ["Desserts", "Fast Food"],
      locality: "Rohini",
      mediaFiles: [
        {
          type: "IMAGE",
          id: "2022-11-10T10:07:27.333",
          url: "v1668074848/xsk9esl1jiwv5felmgm1.jpg",
        },
      ],
      highlights: ["Parking available", "SwiggyPay accepted", "Pure veg"],
      locationInfo: {
        distanceString: "5.3 km",
        city: {
          name: "Delhi",
        },
        formattedAddress: "Rohini, Delhi",
      },
      offerInfoV2: {
        otherOffers: {
          logo: {
            logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
          },
          offers: [
            {
              header: "FLAT 25% OFF",
              offerLogo: {},
              availability: "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
              dealCategory: "Pre-Book",
              availabilityDescription: "Available today",
            },
          ],
        },
      },
      vendorOffer: {
        info: {
          header: "TODAY’S \nDISCOUNT",
          type: "FLAT",
          title: "10% Off",
          subtitle: "on total bill",
          description: "FLAT 10% OFF",
          isOfferApplicableNow: true,
          tnc: [
            "Discount on this restaurant is applicable throughout the day for you.",
            "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
            "You get a flat discount on your bill amount with no upper limit.",
            "This offer cannot be clubbed with an in-house offer or offers from other platforms",
            "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
            "The restaurant may levy Service charge/Entry fees as per its discretion",
            "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
            "Any items ordered that are not included in the offer will be billed separately.",
            "Menu prices and items may change without prior notice.",
            "Weekend and weekdays offer might differ as per restaurant’s discretion.",
          ],
          offerType: "OFFER_TYPE_V2_REGULAR",
          availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
          offersLogoV2: [
            {
              logo: "dineout/rx-card/OFFER.png",
              type: "LOGO_TYPE_RX_TILE",
            },
            {
              logo: "dineout/search/as/Offers.png",
              type: "LOGO_TYPE_SEARCH_SUGGESTION",
            },
            {
              type: "LOGO_TYPE_PAY_BILL",
            },
          ],
          discountInfo: {
            discountType: "DISCOUNT_TYPE_PERCENTAGE",
            discountValue: 10,
          },
        },
        otherOffersInfo: [
          {
            header: "TODAY’S \nDISCOUNT",
            type: "FLAT",
            title: "25% OFF",
            description: "FLAT 25% OFF",
            isOfferApplicableNow: true,
            offerType: "OFFER_TYPE_V2_PRE_BOOK",
            availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
            otherLogoContext: {
              logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png",
            },
            dealCategory: "Pre-Book",
            availabilityDescription: "Available today",
            offersLogoV2: [
              {
                logo: "dineout/rx-card/OFFER.png",
                type: "LOGO_TYPE_RX_TILE",
              },
              {
                logo: "dineout/search/as/Offers.png",
                type: "LOGO_TYPE_SEARCH_SUGGESTION",
              },
              {
                type: "LOGO_TYPE_PAY_BILL",
              },
            ],
            discountInfo: {
              discountType: "DISCOUNT_TYPE_PERCENTAGE",
              discountValue: 25,
            },
          },
        ],
        infos: [
          {
            description: "Up to 10% off with HDFC Bank Credit Card",
            otherLogoContext: {
              logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
            },
            discountInfo: {
              discountType: "DISCOUNT_TYPE_PERCENTAGE",
              discountValue: 15,
            },
          },
        ],
        offerCount: 3,
        offerHighlights: [
          {
            logoCtx: {
              text: "Table booking",
              logo: "dineout/rx-card/highlights/book.png",
            },
          },
        ],
        vendorOfferInfos: [
          {
            header: "TODAY’S \nDISCOUNT",
            type: "FLAT",
            title: "10% Off",
            subtitle: "on total bill",
            description: "FLAT 10% OFF",
            isOfferApplicableNow: true,
            tnc: [
              "Discount on this restaurant is applicable throughout the day for you.",
              "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
              "You get a flat discount on your bill amount with no upper limit.",
              "This offer cannot be clubbed with an in-house offer or offers from other platforms",
              "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
              "The restaurant may levy Service charge/Entry fees as per its discretion",
              "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
              "Any items ordered that are not included in the offer will be billed separately.",
              "Menu prices and items may change without prior notice.",
              "Weekend and weekdays offer might differ as per restaurant’s discretion.",
            ],
            offerType: "OFFER_TYPE_V2_REGULAR",
            availability: "OFFER_AVAILABILITY_AVAILABLE_TODAY",
            offersLogoV2: [
              {
                logo: "dineout/rx-card/OFFER.png",
                type: "LOGO_TYPE_RX_TILE",
              },
              {
                logo: "dineout/search/as/Offers.png",
                type: "LOGO_TYPE_SEARCH_SUGGESTION",
              },
              {
                type: "LOGO_TYPE_PAY_BILL",
              },
            ],
            discountInfo: {
              discountType: "DISCOUNT_TYPE_PERCENTAGE",
              discountValue: 10,
            },
          },
        ],
      },
      customerOffer: {
        info: {
          description: "+ Up to 10% bank offers",
          otherLogoContext: {
            logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png",
          },
          discountInfo: {
            discountType: "DISCOUNT_TYPE_PERCENTAGE",
            discountValue: 15,
          },
        },
        loyaltyInfo: {
          cta: {},
          offerDetail: {
            type: "FLAT",
            title: "₹150 Off",
            subtitle: "above ₹1500",
            description: " ₹150 off",
            logoContext: {
              text: "with",
              logo: "ONE",
            },
            coupon: {
              availableCouponCount: 2,
            },
            otherLogoContext: {
              logo: "OFFER_LOGO",
            },
            discountInfo: {
              discountType: "DISCOUNT_TYPE_FLAT",
              discountValue: 150,
            },
          },
          oneBenefit: {
            logo: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png",
          },
        },
        otherOffersInfo: [
          {
            header: "ADDITIONAL OFFERS",
            type: "CASHBACK",
            title: "10%*",
            logoContext: {},
            tnc: [
              "Valid only on Swiggy HDFC Bank Credit Card",
              "Applicable on a minimum net transaction value of ₹100",
              "Monthly cashback limit of ₹1500 on Swiggy spends",
              "Cashback will be processed in the next statement cycle",
              "Other T&Cs may apply",
            ],
            coupon: {},
            adjoiningSubtext: "Above ₹100",
            discountInfo: {
              discountType: "DISCOUNT_TYPE_PERCENTAGE",
              discountValue: 10,
            },
          },
        ],
        infos: [
          {
            description: "Up to 10% off with bank offers",
            discountInfo: {
              discountType: "DISCOUNT_TYPE_PERCENTAGE",
              discountValue: 15,
            },
          },
        ],
        offerCount: 1,
      },
      isPaymentAccepted: true,
      promoted: true,
      adTrackingId:
        "cid=4d933b8e-aeeb-4874-9dbd-a4b34127dde9~~adtrid=44e0a981-3a35-41b3-a892-2261fc6165ac~~adgrpid=4d933b8e-aeeb-4874-9dbd-a4b34127dde9#ag1~~cndid=637431~~bp=k8P9OP0/GfNp29xWfuqFCPIpbdRJYiwefTKdp4bkAO1W7mi2UAbsla2VXFGxxdTjrFz5v/kj7NJ9luVl5xwWEoHm3h6m~~mp=SWIGGY_IN~~bl=DINEOUT~~st=~~srvts=1770653123730~~plid=6063bb22-c5fd-4da9-ad5a-97d86b61ddf4~~plpr=DINEOUT_COLLECTION#LISTING~~cityid=4~~lmd=3709.4568~~collid=116084",
      offerInfoV3: {
        offerLogo: {
          logo: "dineout/rx-card/OFFER.png",
        },
        vendorOffer: {
          title: "Flat 25% off",
          subtitle: "on pre-booking",
          subtext: "+ 3 more",
          style: {
            textColour: "text_color_highest_emphasis_inverse",
            bgColour: "positive",
          },
          subtextStyle: {},
        },
      },
      vegClassifier: "VEG_CLASSIFIER_VEG",
      mediaStyle: {
        aspectRatio: 1.7778,
      },
      vendorHighlights: [
        {
          logo: {
            logo: "dineout/rx-card/highlights/book.png",
          },
          title: "Table booking",
          style: {
            textColour: "text_color_med_emphasis",
            bgColour: "background_button_tertiary_low",
          },
        },
      ],
      parentId: "5165",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/637431/dineout",
      text: "DINERSONE_REST_DETAIL",
      type: "DEEPLINK",
    },
  },
];

const PopularInArea = ({ data }: { data: any }) => {
  const popularData = useMemo(
    () =>
      data?.cards[6]?.card?.card?.info[0]?.stackedDetails?.dineoutRestaurants
        ?.popularItems,
    [],
  );

  const { scrollRef, isScrollStart, isScrollEnd, scroll, checkScrollPosition } =
    UseHorizontalScrollHook();

  return (
    <div className="container popular-section py-8 relative ">
      <div className="mb-8 flex items-center justify-between ">
        <div className="section-heading">Popular in your area!</div>
        {/* -->> popular card <<-- */}

        <div className="flex items-center gap-4">
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
      </div>
      <div
        ref={scrollRef}
        onScroll={checkScrollPosition}
        className="w-full flex gap-6.5 pb-4 overflow-x-auto no-scrollbar"
      >
        {popularData?.map((itm: any) => {
          return <PopularProductCard key={itm?.info?.id} data={itm} />;
        })}
      </div>
    </div>
  );
};

export default memo(PopularInArea);
