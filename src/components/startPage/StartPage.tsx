import Quiz from "../quizComponents/Quiz";

import "../../App.css";

function StartPage() {
    return (
        <>
            <div className="mt-20 md:flex flex-col">
                <Quiz />
            </div>
        </>
    );
}

export default StartPage;
