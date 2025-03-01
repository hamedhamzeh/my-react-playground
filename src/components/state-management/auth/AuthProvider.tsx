import React, { ReactNode, useReducer } from "react";
import AuthContex from "../auth/authContext";

interface LoginAction {
    type: "LOGIN";
    username: string;
}

interface LogoutAction {
    type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
    switch (action.type) {
        case "LOGOUT":
            return "";
        case "LOGIN":
            return action.username;
    }
};

interface Props {
    children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
    const [user, dispatch] = useReducer(authReducer, "");

    return <AuthContex.Provider value={{ user, dispatch: dispatch }}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
