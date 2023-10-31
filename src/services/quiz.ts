import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MY_API_KEY } from "../api/api";

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

export const { useGetQuizQuery } = quizApi;
