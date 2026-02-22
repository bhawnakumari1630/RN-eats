import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import ProductSlice from "./slices/ProductSlice";
import AddressSlice from "./slices/AddressSlice";

const store = configureStore({
  reducer: {
    address: AddressSlice,
    cart: CartSlice,
    products: ProductSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];
