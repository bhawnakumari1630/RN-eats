"use client";
import UserGeolocation from "./UseGeolocation";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { IconType } from "react-icons";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

interface InputSidesProps {
  parentClass: string;
  className?: string;
  id: string;
  icon: IconType;
  iconSize?: number;
  isShowTriangleIcon?: boolean;
  placeholder: string;
  onChange: (e: any) => void;
}

const InputSides: React.FC<InputSidesProps> = ({
  parentClass,
  className = "",
  id,
  icon,
  iconSize = 18,
  placeholder = "",
  onChange,
  isShowTriangleIcon = false,
}) => {
  const Icon = icon;
  return (
    <div className={`${parentClass} search-field`}>
      <label htmlFor={id} className={className}>
        <div>
          <Icon className={`left-icon`} style={{ fontSize: `${iconSize}px` }} />
        </div>
        <input
          type="text"
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={onChange}
          className=""
        />
        {/* <GoTriangleUp className="triangle-icon" /> */}
        {isShowTriangleIcon && (
          <div>
            <GoTriangleDown className="triangle-icon text-xl text-gray-600" />
          </div>
        )}
      </label>
    </div>
  );
};

const Searchbar = () => {
  const { currentAddress } = UserGeolocation();
  const [searchQuery, setSearchQuery] = useState("");

  const rightPlaceholder =
    searchQuery?.trim()?.length > 0
      ? searchQuery
      : "Search for restraunt, cuisine or a dish";

  const onChangeCurrentAddress = (e: React.ChangeEvent) => {};
  return (
    <div className="searchbar">
      <InputSides
        parentClass="left-bar"
        id="currentLocation"
        placeholder={currentAddress?.display_name ?? "Select address..."}
        icon={FaLocationDot}
        isShowTriangleIcon={true}
        onChange={onChangeCurrentAddress}
      />
      <InputSides
        parentClass="right-bar"
        id="searchQuery"
        placeholder={rightPlaceholder}
        icon={IoSearchOutline}
        iconSize={22}
        onChange={onChangeCurrentAddress}
      />
    </div>
  );
};

export default Searchbar;
