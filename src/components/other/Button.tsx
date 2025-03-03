import { ReactNode } from "react";

interface Props {
    color?: "primary" | "secondary" | "danger";
    children: ReactNode;
    onClick: () => void;
}

function Button({ color = "primary", children, onClick }: Props) {
    return (
        <>
            <button className={"btn btn-" + color} onClick={onClick}>
                {children}
            </button>
        </>
    );
}

export default Button;
