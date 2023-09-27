import { Radio } from "@mui/material";
import "./startPage.css";

function StartPage() {
    return (
        <>
            <div className="app-header">
                <h1>Quizz App</h1>
            </div>
            <div className="app-box">
                {" "}
                <div className="header-box">
                    <div className="question-box">Pytanie</div>
                    <div className="answer-box">
                        <div className="answer">
                            <div>
                                <Radio
                                    // checked={selectedValue === "a"}
                                    // onChange={()}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ "aria-label": "A" }}
                                />
                            </div>
                            <div>text</div>
                        </div>
                        <div className="answer">
                            <div>
                                <Radio
                                    // checked={selectedValue === "a"}
                                    // onChange={()}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ "aria-label": "A" }}
                                />
                            </div>
                            <div>text</div>
                        </div>
                        <div className="answer">
                            <div>
                                <Radio
                                    // checked={selectedValue === "a"}
                                    // onChange={()}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ "aria-label": "A" }}
                                />
                            </div>
                            <div>text</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StartPage;
