// create your RTK Query endpoints here
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quotesApi = createApi({
  reducerPath: 'quotesApi',
  endpoints: builder => ({
    getQuotes: builder.query({

    }),
    createQuote: builder.mutation({

    }),
    toggleQuote: builder.mutation({

    }),
    deleteQuote: builder.mutation({
      
    })
  })
})