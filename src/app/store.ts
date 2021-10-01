import { configureStore } from "@reduxjs/toolkit";
import { productApiSlice } from "../features/products/productSlice";
// import customerSlice from "../features/customerSlice";
// import reservationReducer from "../features/reservationSlice";

export const store = configureStore({
    reducer: {
        [productApiSlice.reducerPath]: productApiSlice.reducer,
        // reservations: reservationReducer,
        // customers: customerSlice,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApiSlice.middleware);
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
