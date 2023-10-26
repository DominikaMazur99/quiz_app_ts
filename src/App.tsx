import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./components/startPage/StartPage";
import Quiz from "./components/quizComponents/Quiz";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home_page" element={<StartPage />} />
                    <Route path="quiz" element={<Quiz />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
