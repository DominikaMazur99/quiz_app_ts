import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuizState } from "../../services/types";

const initialState: QuizState = {
    questions: [], // Store questions fetched from the API
    currentQuestionIndex: -1,
    currentAnswer: [],
    score: null,
};

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        startQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.currentAnswer = [];
            state.score = null;
        },
        nextQuestion: (state) => {
            state.currentQuestionIndex++;
        },
        answerQuestion: (state, action: PayloadAction<string>) => {
            state.currentAnswer.push(action.payload);
        },
        calculateScore: (state) => {
            state.score = 0;
            state.currentAnswer.forEach((userAnswer, index) => {
                const question = state.questions[index];
                if (
                    question.correct_answer.toLowerCase() ===
                    userAnswer.toLowerCase()
                ) {
                    state.score!++;
                }
            });
        },
    },
});

export const { startQuiz, nextQuestion, answerQuestion, calculateScore } =
    quizSlice.actions;

export default quizSlice.reducer;
