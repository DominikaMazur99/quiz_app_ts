import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

interface QuestionProgressProps {
    currentQuestion: number;
    totalQuestions: number;
}

function QuestionProgress({
    currentQuestion,
    totalQuestions,
}: QuestionProgressProps) {
    const progress = (currentQuestion / totalQuestions) * 100;

    return (
        <div>
            {/* Circular Border */}
            <div className="rounded-full w-full h-full flex items-center justify-center bg-indigo-100">
                {/* CircularProgress (z-index: 1) */}
                <CircularProgress
                    variant="determinate"
                    value={progress}
                    size={100}
                    className="z-10"
                    sx={{
                        color: "indigo-600",
                    }}
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                {currentQuestion > 0 && (
                    <Typography
                        variant="caption"
                        component="div"
                        color="text-secondary"
                        sx={{ fontSize: "1rem" }}
                    >
                        {`${currentQuestion}/${totalQuestions} `}
                    </Typography>
                )}
            </div>
        </div>
    );
}

export default QuestionProgress;
