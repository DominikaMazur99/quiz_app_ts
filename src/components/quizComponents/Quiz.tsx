import React, { useEffect } from "react";
import { useGetQuizQuery } from "../../services/quiz";
import QuestionProgress from "../adds/QuestionProgress";
import { useDispatch, useSelector } from "react-redux";
import {
    startQuiz,
    nextQuestion,
    answerQuestion,
    calculateScore,
} from "../../features/quiz/QuizSlice"; // Import the quizSlice actions
import { RootState } from "../../store";
import { GrNext } from "react-icons/gr";
import { Button, Radio } from "@mui/material";
import { Choice } from "../../services/types";

import "../../App.css";

const Quiz: React.FC = () => {
    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetQuizQuery("linux");
    const currentQuestion = useSelector(
        (state: RootState) => state.quiz.currentQuestionIndex
    ); // Access currentQuestionIndex from the state
    const totalQuestions = data?.length; // Safely access the length property
    console.log(totalQuestions);

    useEffect(() => {
        dispatch(startQuiz());
    }, []);

    const handleNextQuestion = () => {
        dispatch(nextQuestion());
    };

    const handleAnswerQuestion = (answer: string) => {
        dispatch(answerQuestion(answer));
    };

    const handleCalculateScore = () => {
        dispatch(calculateScore());
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data || data.length === 0) {
        return <div>No quiz data available.</div>;
    }

    const question = data[currentQuestion];

    const choicesArray: Choice[] = Object.entries<any>(question.answers)
        .filter(([key, value]) => value !== null)
        .map(([key, text], index) => ({ id: key, text: text as string }));

    console.log(data);
    // const question = data[currentQuestion];
    console.log(choicesArray);
    return (
        <>
            {/* <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold text-center">
                {`QUESTION ${currentQuestion + 1}`}
            </div> */}
            <div className="flex flex-col">
                <div className="flex items-center justify-center relative">
                    <div className="absolute">
                        <QuestionProgress
                            currentQuestion={18}
                            totalQuestions={totalQuestions}
                        />
                    </div>
                    <div className="flex items-center justify-center align-bottom flex-col rounded-xl border border-customBlue px-8 mt-40 h-40 bg-white">
                        {" "}
                        {/* Updated this line */}
                        {question.question}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-10 mt-4 text-center">
                    {choicesArray?.map(
                        (choice: { id: string; text: string }, idx: number) => (
                            <div
                                className="flex items-center justify-between h-12 w-102 border rounded-xl border-customBlue bg-white"
                                key={idx}
                            >
                                <div className="flex items-center space-x-5">
                                    <Radio />
                                    <div>{choice?.text}</div>
                                </div>
                            </div>
                        )
                    )}
                </div>
                {/* {question.choices.map((choice: object) => (
                    <div key={choice.id}>
                        <label>
                            <input
                                type="radio"
                                name="choices"
                                value={choice.id}
                                onChange={() => handleAnswerQuestion(choice.id)}
                            />
                            {choice.text}
                        </label>
                    </div>
                ))} */}
                <div className="flex justify-center text-center mt-10">
                    <Button
                        variant="outlined"
                        endIcon={<GrNext />}
                        onClick={handleNextQuestion}
                        sx={{ backgroundColor: "white", color: "black" }}
                    >
                        Next
                    </Button>
                    {/* <button className="m-2" onClick={handleCalculateScore}>
                        Calculate Score
                    </button> */}
                </div>
            </div>
        </>
    );
};

export default Quiz;
