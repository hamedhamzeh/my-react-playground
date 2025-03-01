import { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";
import React from "react";

interface AuthContextType {
    user: string;
    dispatch: Dispatch<AuthAction>;
}

const AuthContex = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContex;
