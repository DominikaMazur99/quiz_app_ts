import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { quizApi } from "./services/quiz";
import { quizSlice } from "./features/quiz/QuizSlice";

const store = configureStore({
    reducer: {
        [quizApi.reducerPath]: quizApi.reducer,
        quiz: quizSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(quizApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export default store;
