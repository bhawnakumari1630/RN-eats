"use client";

import { fetchCurrentLocation } from "@/redux/slices/AddressSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserGeolocation = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { coordinates, address, status, error } = useSelector(
    (state: RootState) => state.address,
  );

  const refreshLocation = () => {
    dispatch(fetchCurrentLocation());
  };

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchCurrentLocation());
    }
  }, [dispatch, status]);

  return {
    locationData: { coordinates, loaded: status === "succeeded", error },
    currentAddress: address,
    refreshLocation,
    status,
  };
};

export default UserGeolocation;

// "use client";
// import { current_address_by_coords } from "@/utils/constants";
// import { AddressType, CoordinatesType } from "@/utils/types/types";
// import React, { useEffect, useState } from "react";

// const UserGeolocation = () => {
//   const [currentAddress, setCurrentAddress] = useState<Partial<AddressType>>(
//     {},
//   );
//   const [locationData, setLocationData] = useState<{
//     loaded: boolean;
//     coordinates: CoordinatesType;
//     error?: any;
//   }>({
//     loaded: false,
//     coordinates: { lat: "", lng: "" },
//     error: {},
//   });
//   const [suggestions, setSuggestions] = useState([]);

//   function getCurrentLocation() {
//     if (!navigator.geolocation) return;

//     function onSuccess(pos: any) {
//       setLocationData((prev) => ({
//         ...prev,
//         loaded: true,
//         coordinates: { lat: pos.coords.latitude, lng: pos.coords.longitude },
//       }));
//     }
//     function onError(err: any) {
//       setLocationData(() => ({
//         loaded: false,
//         coordinates: { lat: "", lng: "" },
//         error: err,
//       }));
//     }
//     navigator.geolocation.getCurrentPosition(onSuccess, onError);
//   }

//   function getAddressByCoordinates({ lat, lng }: CoordinatesType) {
//     const url = current_address_by_coords(lat, lng);
//     if (!url) return;
//     fetch(url)
//       .then((d) => d.json())
//       .then((res) => {
//         console.log(res);
//         setCurrentAddress(res);
//       });
//   }

//   useEffect(() => {
//     getCurrentLocation();
//   }, []);
//   useEffect(() => {
//     const { lat, lng } = locationData.coordinates;
//     if (!lat || !lng) return;
//     getAddressByCoordinates(locationData.coordinates);
//   }, [locationData]);

//   // console.log("location", locationData);

//   return { locationData, setLocationData, getCurrentLocation, currentAddress };
// };

// export default UserGeolocation;

// // const handleViewOnMap = () => {
// //   const { lat, lng } = locationData.coordinates;
// //   const url = locate_on_map_URL(lat, lng);
// //   if (!url) return null;
// //   window.open(url, "_blank");
// // };
