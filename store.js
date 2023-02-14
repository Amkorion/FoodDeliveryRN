import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./Slices/basketSlice";
import restaurantSlice from "./Slices/restaurantSlice";

const store = configureStore({
  reducer: { basket: basketSlice, restaurant: restaurantSlice },
});

export default store;
