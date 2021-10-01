import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface ProductsType {
    products: ProductType[];
}
const initialState: ProductsType = { products: [] };

export const productApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com",
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query<ProductType[], number | void>({
                query(limit = 10) {
                    return `/products?limit=${limit}`;
                },
            }),
        };
    },
});

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProducts: (state, action: PayloadAction<ProductType>) => {
            console.log(action.payload);
            state.products.push(action.payload);
        },
    },
});

export const { useFetchProductsQuery } = productApiSlice;

export const { addProducts } = productSlice.actions;

export default productSlice.reducer;
