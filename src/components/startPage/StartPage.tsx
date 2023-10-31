import { Button, TextField } from "@mui/material";
import "../../App.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setQuestions, startQuiz } from "../../features/quiz/QuizSlice";
import { useNavigate } from "react-router";
import { useGetQuizQuery } from "../../services/quiz";

import quizLogo from "../../images/quiz_logo.png";

function StartPage() {
    const { data, error } = useGetQuizQuery("linux");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState<string>("");

    const handleStartQuiz = () => {
        dispatch(startQuiz());
        navigate("/quiz");
    };

    useEffect(() => {
        localStorage.setItem("user", user);
    }, [user]);

    useEffect(() => {
        if (data) {
            dispatch(setQuestions(data));
        }
    }, [data, dispatch]);

    if (error) {
        return <div>Error</div>;
    }

    return (
        <div className="flex flex-col items-center mt-40 ">
            <div className="shadow-lg border border-gray-300 rounded-lg p-6 w-80 h-70">
                <div className=" flex items-center justify-center">
                    <img src={quizLogo} className="w-90 h-90" />
                </div>
                <div className="mt-20 flex items-center justify-center">
                    <TextField
                        id="user-name"
                        label="Enter Your Name"
                        type="text"
                        focused
                        sx={{ color: "rgb(59 130 246/1)" }}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div className="mt-10 flex items-center justify-center">
                    <Button
                        variant="outlined"
                        sx={{
                            color: "rgb(59 130 246/1)",
                        }}
                        onClick={handleStartQuiz}
                    >
                        START QUIZ
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default StartPage;
