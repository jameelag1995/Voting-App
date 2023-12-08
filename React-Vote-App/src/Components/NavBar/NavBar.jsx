import React, { useContext } from "react";
import "./NavBar.css";
import { LoginContext } from "../../Context/LoginContext";
import { ThemeContext } from "../../Context/ThemeContext";
const NavBar = () => {
    const { loggedUser, isAdmin } = useContext(LoginContext);
    const {darkTheme}=useContext(ThemeContext)
    return (
        <div className={`NavBar ${darkTheme ? "dark" : ""}`}>
            <div className="logo">Logo</div>

            <div className="dropdown">
                <button className={`dropbtn ${darkTheme ? "dark" : ""}`}>
                    {loggedUser.name}
                </button>
                <div className="dropdown-content">
                    <button className={darkTheme ? "dark" : ""}>Vote</button>
                    {isAdmin && (
                        <button className={darkTheme ? "dark" : ""}>
                            Statistics
                        </button>
                    )}
                    <button className={darkTheme ? "dark" : ""}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
