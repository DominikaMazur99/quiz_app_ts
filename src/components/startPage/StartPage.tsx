// import Quiz from "../quizComponents/Quiz";

import { Button, TextField } from "@mui/material";
import "../../App.css";

function StartPage() {
    return (
        <div className="flex flex-col items-center h-screen mt-40">
            <div className="w-60 h-60 border-2 border-blue-500 rounded-full flex items-center justify-center bg-yellow-400">
                <div className="text-3xl subpixel-antialiased italic font-semibold text-blue-500">
                    QuizApp
                </div>
            </div>
            <div className="mt-20">
                <TextField
                    id="user-name"
                    label="Enter Your Name"
                    type="text"
                    focused
                    sx={{ color: "rgb(59 130 246/1)" }}
                />
            </div>
            <div className="mt-20">
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: "rgb(250 204 21/1)",
                        color: "rgb(59 130 246/1)",
                    }}
                >
                    START
                </Button>
            </div>
        </div>
    );
}

export default StartPage;
