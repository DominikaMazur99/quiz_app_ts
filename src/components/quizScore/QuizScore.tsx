import { Button } from "@mui/material";
import avatar from "../../images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { startQuiz } from "../../features/quiz/QuizSlice";
import { useNavigate } from "react-router-dom";

function QuizScore() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const totalPoints = useSelector((state: RootState) => state.quiz.score);
    const user: string | null = localStorage.getItem("user");

    const handleRestart = () => {
        dispatch(startQuiz());
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center mt-40">
            <div className="shadow-lg border border-gray-300 rounded-lg p-6 w-80 h-70">
                <div className="flex flex-col items-center">
                    <img src={avatar} className="w-90 h-90" />
                    <p>{user},</p>
                    <div className="mt-10 flex items-center justify-center">
                        Congrats! You gained {totalPoints} points!
                    </div>
                </div>
                <div className="mt-10 flex items-center justify-center">
                    <Button
                        variant="outlined"
                        sx={{
                            color: "rgb(59 130 246/1)",
                        }}
                        onClick={handleRestart}
                    >
                        RESTART
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default QuizScore;
