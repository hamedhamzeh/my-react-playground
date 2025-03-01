interface Action {
    type: "INCREMENT" | "RECET";
}
const counterReducer = (state: number, action: Action): number => {
    if (action.type === "INCREMENT") return state + 1;
    if (action.type === "RECET") return 0;
    return state;
};

export default counterReducer;
