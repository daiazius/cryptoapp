import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '97b8b3c56cmsh944cf74ca07f777p1f66f1jsn717108036efb',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/'

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders })

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi