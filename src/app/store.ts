import { configureStore } from "@reduxjs/toolkit";
import { orderApiSlice } from "../features/order/orderApiSlice";
import { productApiSlice } from "../features/products/productSlice";
// import customerSlice from "../features/customerSlice";
// import reservationReducer from "../features/reservationSlice";

export const store = configureStore({
    reducer: {
        [productApiSlice.reducerPath]: productApiSlice.reducer,
        [orderApiSlice.reducerPath]: orderApiSlice.reducer,
        // reservations: reservationReducer,
        // customers: customerSlice,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(orderApiSlice.middleware);
        // .concat(productApiSlice.middleware)
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
