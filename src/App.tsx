import React from "react";
import { Container } from "@mui/material";
import "./App.css";
import { useGetQuizQuery } from "./services/quiz";

function App() {
    const { data, error, isLoading } = useGetQuizQuery("linux");

    console.log(data);
    return (
        <React.Fragment>
            <Container maxWidth="md" sx={{ padding: "1rem" }}>
                <h1 className="app-header">Quizz App</h1>
            </Container>
        </React.Fragment>
    );
}

export default App;
