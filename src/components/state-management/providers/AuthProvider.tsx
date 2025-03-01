import React, { ReactNode, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import AuthContex from "../contexts/authContext";

interface Props {
    children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
    const [user, dispatch] = useReducer(authReducer, "");

    return <AuthContex.Provider value={{ user, dispatch: dispatch }}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
