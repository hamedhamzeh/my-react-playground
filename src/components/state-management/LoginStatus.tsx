import { useContext, useReducer, useState } from "react";
import authReducer from "./reducers/authReducer";
import AuthContex from "./contexts/authContext";

const LoginStatus = () => {
    const { user, dispatch } = useContext(AuthContex);
    if (user)
        return (
            <>
                <div>
                    <span className="mx-2">{user}</span>
                    <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
                        Logout
                    </a>
                </div>
            </>
        );
    return (
        <div>
            <a onClick={() => dispatch({ type: "LOGIN", username: "Hamedo Hamzeh" })} href="#">
                Login
            </a>
        </div>
    );
};

export default LoginStatus;
