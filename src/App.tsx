import StartPage from "./components/startPage/StartPage";
import "./App.css";

function App() {
    return (
        <div className=" h-screen mx-auto px-40">
            {" "}
            {/* Set background color and full height */}
            <div className="container ">
                <StartPage />
            </div>
        </div>
    );
}

export default App;
