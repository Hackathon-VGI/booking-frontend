import { configureStore } from "@reduxjs/toolkit";
import searchItemReducer from "./features/searchedItems/searchedItemsSlice";
import selectItemReducer from "./features/searchedItems/selectedItem";

export const makeStore = () => {
  return configureStore({
    reducer: {
      searchResults: searchItemReducer,
      selectItem: selectItemReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
