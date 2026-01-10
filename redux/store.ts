import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import ProductSlice from "./slices/ProductSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductSlice,
  },
});

export default store;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];
