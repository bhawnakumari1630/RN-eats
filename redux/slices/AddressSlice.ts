import { current_address_by_coords } from "@/utils/constants";
import { AddressType, CoordinatesType } from "@/utils/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { error } from "console";

export interface InitialStateProp {
  coordinates: CoordinatesType;
  address: Partial<AddressType>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: InitialStateProp = {
  coordinates: { lat: "", lng: "" },
  address: {},
  status: "idle",
  error: null,
};

export const fetchCurrentLocation = createAsyncThunk(
  "address/fetchCurrentLocation",
  async (_, { rejectWithValue }) => {
    try {
      // -- get current position
      const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude: lat, longitude: lng } = pos.coords;

      //   -- get current addreess by coordinates...
      const url = current_address_by_coords(lat, lng);
      if (!url) throw new Error("Invalid API url");

      const response = await fetch(url);
      const addressData = await response.json();
      return {
        coordinates: { lat, lng },
        address: addressData,
      };
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to get Location");
    }
  },
);

const AddressSlice = createSlice({
  name: "addressSlice",
  initialState,
  reducers: {
    getAddress: (state: any) => state,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentLocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrentLocation.fulfilled, (state, action) => {
        ((state.status = "succeeded"),
          (state.coordinates = action.payload.coordinates),
          (state.address = action.payload.address));
      })
      .addCase(fetchCurrentLocation.rejected, (state, action) => {
        ((state.status = "failed"), (state.error = action.payload as string));
      });
  },
});

export default AddressSlice.reducer;
