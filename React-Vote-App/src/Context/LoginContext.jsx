import { createContext, useEffect, useState } from "react";
import axios from "axios";

const url = "https://6571c58bd61ba6fcc0138448.mockapi.io/users";

export const LoginContext = createContext({
    loggedUser: {},
    setLoggedUser:()=>{},
    usersData:[],
    setUsersData:()=>{},
    errMsg: "",
    isAdmin:false,
    handleUserLogin: () => {},
    handleUserLogout: () => {},
});

export default function LoginContextProvider({ setLogin,children }) {
    const [usersData, setUsersData] = useState([]);
    const [loggedUser, setLoggedUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const fetchData = async () => {
        try {
            const res = await axios.get(url);
            console.log(res);
            setUsersData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    function handleUserLogin(email, password) {
        let currUser = usersData.find((el) => el.email == email);
        if (currUser === undefined) {
            setErrMsg("Email Doesn't Exist");
            return;
        }
        if (currUser.password !== password) {
            setErrMsg("Wrong Password");
            return;
        }
        if (currUser.isAdmin) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }

        setLoggedUser(currUser);
        setErrMsg('');
        setLogin(true)
        console.log(currUser);
        console.log("Login success");
    }
    function handleUserLogout(id) {}

    const loginContextValues = {
        loggedUser,
        setLoggedUser,
        usersData,
        setUsersData,
        errMsg,
        isAdmin,
        handleUserLogin,
        handleUserLogout,
    };

    return (
        <LoginContext.Provider value={loginContextValues}>
            {children}
        </LoginContext.Provider>
    );
}
