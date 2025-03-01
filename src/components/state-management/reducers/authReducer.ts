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

export default authReducer;
