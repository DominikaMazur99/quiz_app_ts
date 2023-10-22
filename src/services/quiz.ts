// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Question } from "./types";
import { MY_API_KEY } from "../api/api";

// Define a service using a base URL and expected endpoints
export const quizApi = createApi({
    reducerPath: "quizApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://quizapi.io/api/v1/" }),
    endpoints: (builder) => ({
        getQuiz: builder.query({
            query: (categoryID) =>
                `questions?apiKey=${MY_API_KEY}&category=${categoryID}`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuizQuery } = quizApi;
