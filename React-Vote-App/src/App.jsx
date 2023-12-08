import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import LoginContextProvider from "./Context/LoginContext";
import ThemeContextProvider from "./Context/ThemeContext";
import Login from "./Pages/Login/Login";
import Vote from "./Pages/Vote/Vote";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div className="App page">
            <ThemeContextProvider>
                <LoginContextProvider setLogin={setLoggedIn}>
                    {!loggedIn ? (
                        <Login />
                    ) : (
                        <>
                            <NavBar />

                            <Vote />
                        </>
                    )}
                </LoginContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
