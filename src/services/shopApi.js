import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getProducts: builder.query({
      query: () => "products.json",
    }),
    getProductsByCategory: builder.query({
      //La query obtiene la categoría por param, obtiene los products.json y los ordena según la category puesta por el user
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    postOrder: builder.mutation({
        query: ({...order}) => ({
            url: 'orders.json',
            method: 'POST',
            body: order
        })
    })
  }),
});

//Hook que se generan por defecto al crear los endpoints
export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  usePostOrderMutation
} = shopApi;
