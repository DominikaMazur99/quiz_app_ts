import React from "react";
import { Container } from "@mui/material";
import "./App.css";
import { useGetQuizQuery } from "./services/quiz";
import StartPage from "./components/startPage/StartPage";

function App() {
    const { data, error, isLoading } = useGetQuizQuery("linux");

    console.log(data);
    return (
        <React.Fragment>
            <Container maxWidth="md" sx={{ padding: "1rem" }}>
                <StartPage />
            </Container>
        </React.Fragment>
    );
}

export default App;
