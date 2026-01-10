import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

export interface ProductProp {
  id: string;
  title: string;
  //   image: StaticImageData;
  imageSrc: string;
  imageAlt: string;
  price: number;
  description: string;
}

interface CartProp extends ProductProp {
  quantity: number;
}

interface InitialStateProp {
  cartItem: CartProp[];
}
let initialState: InitialStateProp = {
  cartItem: [],
};

const CartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add_to_cart: (
      state: InitialStateProp,
      { payload }: PayloadAction<ProductProp>
    ) => {
      const existingProduct = current(state.cartItem).find(
        (itm: ProductProp) => itm.id === payload.id
      );
      if (!existingProduct) {
        const newPayload = { ...payload, quantity: 1 };
        state.cartItem.push(newPayload);
      } else {
        // console.log(state.cartItem.);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
  },
});

export const { add_to_cart } = CartSlice.actions;
export default CartSlice.reducer;
