import { api } from "../api";
import { Product, ProductRequest, ProductResponse } from "./types";

export const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<ProductResponse, void>({
      query: () => ({
        url: "/products",
        method: "GET",
        params: {
          limit: 0,
        },
      }),
      providesTags: ["Products"],
    }),
    getSingleProduct: build.query<Product, { id: string }>({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    updateProduct: build.mutation<Product, ProductRequest>({
      query: (data: ProductRequest) => ({
        url: `/products/${data.id}`,
        method: "PUT",
        body: {
          title: data.title,
          description: data.description,
          price: data.price,
          thumbnail: data.thumbnail,
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} = productsApi;
