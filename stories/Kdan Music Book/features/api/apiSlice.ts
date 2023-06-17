import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { CategoryType } from '../../types';

const productionUrl = `https://kdan-music.vercel.com/api/`
const devUrl = `http://localhost:3001/api/`;

const getbaseUrl = () => {
  if(process.env.NODE_ENV === 'development') {
    return devUrl;
  }
  if(process.env.NODE_ENV === 'production') {
    return productionUrl;
  }
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({baseUrl: getbaseUrl()}),
  reducerPath: 'api',
  endpoints: (build) => ({
    getPopularCategories: build.query<CategoryType[], void>({
      query: () => `spotify/getPopularCategories`
    })
  })
})

export const { useGetPopularCategoriesQuery } = apiSlice;