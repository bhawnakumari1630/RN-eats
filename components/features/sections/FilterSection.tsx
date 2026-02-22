"use client";

import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { IconType } from "react-icons";
import { CollectionCard } from "../../common/cards/CollectionCard";

type activeTabProp = "trending" | "topStealDeals" | "topRated";
interface TabsProp {
  tabs: any[];
  activeTab: activeTabProp;
  setActiveTab: Dispatch<SetStateAction<activeTabProp>>;
}

const TrendingIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const DealsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const PreBookIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    <circle cx="16" cy="18" r="3" fill="currentColor" stroke="none" />
    <path
      d="M15 18l.5.5L17 17"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TabsContainer: React.FC<TabsProp> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  const icons: Record<string, IconType> = {
    trending: TrendingIcon,
    topStealDeals: DealsIcon,
    topRated: PreBookIcon,
  };
  return (
    <>
      <div className="container flex gap-12 items-center">
        {tabs?.map((t: any) => {
          const isActive = t.id == activeTab;
          const Icon: IconType = icons[t.id];

          return (
            <button
              type="button"
              key={t.id}
              className={`flex items-center gap-3 group border-b-2 ${isActive ? "border-(--primary-color)" : "border-transparent"} hover:border-(--primary-color) gray-400 px-1 pb-4 pe-5 transition-all duratio-400 `}
              onClick={() => setActiveTab(t.id)}
            >
              <span
                className={`size-14 text-sm  group-hover:bg-(--primary-light)/50 ${isActive ? "bg-(--primary-light)" : "bg-gray-200/40"} transition-colors duration-600 text-gray-800 flex items-center justify-center rounded-full`}
              >
                <Icon />
              </span>
              {t.title}
            </button>
          );
        })}
      </div>
    </>
  );
};

// interface CollectionProp {
//   id: number;
//   title: string;
//   places: number;
//   image: string;
// }

const FilterSection: React.FC<{ data: any }> = ({ data }) => {
  const targetData = data?.cards[5]?.card?.card;
  const [activeTab, setActiveTab] = useState<activeTabProp>("trending");
  const tabsList = targetData?.tabs;
  const activeTabsData = useMemo(
    () =>
      targetData?.info?.find((t: any) => t.tabId === activeTab)?.stackedDetails
        ?.dineoutRestaurants?.restaurants,
    [activeTab],
  );

  return (
    <div className="filter-section pt-14 mt-8">
      <TabsContainer
        tabs={tabsList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className=" bg-[#f8f8f8] pt-10 pb-12">
        <div className="container grid grid-cols-4 gap-y-8 gap-x-6">
          {activeTabsData?.map((itm: any) => (
            <CollectionCard collection={itm} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
