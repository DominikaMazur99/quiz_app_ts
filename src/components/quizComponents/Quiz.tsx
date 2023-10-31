import React from "react";
import { useGetQuizQuery } from "../../services/quiz";
import QuestionProgress from "../adds/QuestionProgress";
import { useDispatch, useSelector } from "react-redux";
import { nextQuestion, answerQuestion } from "../../features/quiz/QuizSlice";
import { RootState } from "../../store";
import { GrNext } from "react-icons/gr";
import { Box, Button, CircularProgress, Radio } from "@mui/material";
import { Choice } from "../../services/types";

import "../../App.css";
import { useNavigate } from "react-router-dom";

const Quiz: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, isLoading } = useGetQuizQuery("linux");
    const currentQuestion = useSelector(
        (state: RootState) => state.quiz.currentQuestionIndex
    );

    const totalQuestions = data?.length;

    const isLastQuestion = currentQuestion === totalQuestions - 1;

    const handleNextQuestion = () => {
        dispatch(nextQuestion());
    };

    const handleCalculateScore = () => {
        navigate("/score");
    };

    const handleChooseAnswer = (
        event: React.ChangeEvent<HTMLInputElement>,
        questionIndex: number
    ) => {
        const answer = event.target.value;
        dispatch(answerQuestion({ answer, questionIndex }));
    };

    const currentAnswer = useSelector(
        (state: RootState) => state.quiz.currentAnswer
    );

    if (isLoading) {
        return (
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!data || data.length === 0) {
        return <div>No quiz data available.</div>;
    }

    const question = data[currentQuestion];

    const choicesArray: Choice[] = Object?.entries<any>(question.answers)
        ?.filter(([key, value]) => value !== null)
        .map(([key, text], index) => ({ id: key, text: text as string }));

    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center justify-center relative">
                    <div className="absolute">
                        <QuestionProgress
                            currentQuestion={currentQuestion + 1}
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
                                    <Radio
                                        value={choice.id}
                                        checked={choice.id === currentAnswer}
                                        onChange={(event) =>
                                            handleChooseAnswer(
                                                event,
                                                question.id
                                            )
                                        }
                                    />
                                    <div>{choice?.text}</div>
                                </div>
                            </div>
                        )
                    )}
                </div>

                <div className="flex justify-center text-center mt-10">
                    {!isLastQuestion && (
                        <Button
                            variant="outlined"
                            endIcon={<GrNext />}
                            onClick={handleNextQuestion}
                            sx={{ backgroundColor: "white", color: "black" }}
                        >
                            Next
                        </Button>
                    )}

                    {isLastQuestion && (
                        <Button
                            variant="outlined"
                            sx={{ backgroundColor: "white", color: "black" }}
                            className="m-2"
                            onClick={handleCalculateScore}
                        >
                            Calculate Score
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Quiz;
