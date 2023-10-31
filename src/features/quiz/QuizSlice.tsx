import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuizState } from "../../services/types";

const initialState: QuizState = {
    questions: [],
    currentQuestionIndex: -1,
    currentAnswer: "",
    questionIndex: 0,
    score: 0,
};

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload; // Set questions in the state
        },
        startQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.currentAnswer = "";
            state.score = null;
        },
        nextQuestion: (state) => {
            state.currentQuestionIndex++;
        },
        answerQuestion: (
            state,
            action: PayloadAction<{ answer: string; questionIndex: number }>
        ) => {
            const { answer, questionIndex } = action.payload;
            state.currentAnswer = answer;
            state.questionIndex = questionIndex;

            if (state.score === null) {
                state.score = 0;
            }

            const question = state.questions.find(
                (q) => q.id === questionIndex
            );

            if (question) {
                if (
                    answer &&
                    question.correct_answer.toLowerCase() ===
                        answer.toLowerCase()
                ) {
                    state.score++; // Increment the score by 1 if the answer is correct
                }
            } else {
                console.error("Question not found or is undefined.");
            }
        },
    },
});

export const { setQuestions, startQuiz, nextQuestion, answerQuestion } =
    quizSlice.actions;

export default quizSlice.reducer;
