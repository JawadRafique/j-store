import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ItemType {
    name: string;
    price: number;
    category: string;
}

export interface ItemsType {
    Items: ItemType[];
}
// const initialState: ItemsType = { Items: [] };

export const orderApiSlice = createApi({
    reducerPath: "Items Api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/",
    }),
    endpoints(builder) {
        return {
            fetchItems: builder.query<ItemType[], number | void>({
                query() {
                    return `item`;
                },
            }),
            addItem: builder.mutation<ItemType, object | void>({
                query: (item: ItemType) => ({
                    url: `item`,
                    method: "POST",
                    body: item,
                }),
            }),
        };
    },
});

export const { useFetchItemsQuery, useAddItemMutation } = orderApiSlice;

export default orderApiSlice.reducer;
