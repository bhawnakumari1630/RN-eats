// https://youtu.be/WtijdoNfzYg?si=juwpppsK02ZIY2nT
// axios video

// import React, { useState } from "react";

// const BasicApi = () => {
//   const selectedOrg: any = localStorage.getItem("selected-org");
//   const selectedProp: any = localStorage.getItem("selected-prop");

//   const [filtersData, setFiltersData] = useState({
//     org_id: selectedOrg.organizationId,
//     prop_id: selectedProp.propertyId,
//     city: "",
//     dateType: {
//       start: "",
//       end: "",
//     },
//   });

//   const fetchData = async () => {
//     try {
//       const data = await post("/get-org", {
//         params: { ...filtersData },
//       });
//       setResults(data);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   return (
//     <div>
//       BasicApi
//       <select name="city" id="city">
//         {/* <option value=""></option> */}
//         {["", "dehradun", "alwar"]?.map((op) => (
//           <option value={op} onSelect={(e) => setFiltersData((prev) => ({...prev, city: e.value}))}>{op}</option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default BasicApi;

// =================>>>><<<<==================

// import React, { useEffect, useState } from "react";

// const UserGeolocation = () => {
//   const [locationData, setLocationData] = useState<{
//     loaded: boolean;
//     coordinates: { lat: string; lng: string };
//     error?: boolean;
//   }>({
//     loaded: false,
//     coordinates: { lat: "", lng: "" },
//   });
//   const [suggestions, setSuggestions] = useState([]);

//   function onSuccess(location: any) {
//     setLocationData({
//       loaded: true,
//       coordinates: {
//         lat: location.coords.latitude,
//         lng: location.coords.longitude,
//       },
//     });
//   }

//   function onError(error: any) {
//     setLocationData((prev) => ({ ...prev, loaded: true, error: error }));
//   }

//   useEffect(() => {
//     if (!("geolocation" in navigator)) {
//       onError({ code: 0, message: "Geolocation not supported!" });
//     }
//     // navigator.geolocation.getCurrentPosition(onSuccess, onError);
//     navigator.geolocation.getCurrentPosition(
//       (loc) => console.log("success", loc),
//       (err) => console.log("err", err)
//     );
//   }, []);

//   // ---- fetch location via lat&lng / search query
//   async function fetchAddressByCoordinates(coordinates: any) {
//     const { lat, lng } = coordinates;
//     try {
//       const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log("data:", data);
//       // setLocationData(data);
//     } catch (error) {
//       console.error("Error fetching current", error);
//     }
//   }

//   async function fetchAddressByQuery(query: string) {
//     try {
//       const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=5`;
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log("sugg_data:", data);
//       setSuggestions(data);
//     } catch (error) {
//       console.error("Error fetching address");
//     }
//   }

//   return {
//     locationData,
//     setLocationData,
//     fetchAddressByCoordinates,
//     fetchAddressByQuery,
//   };
// };

// export default UserGeolocation;
