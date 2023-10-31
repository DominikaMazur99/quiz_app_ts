import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./components/startPage/StartPage";
import Quiz from "./components/quizComponents/Quiz";

function App() {
    return (
        <div className="px-4">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="quiz" element={<Quiz />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
