import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
    return (
        <>
            <div className={"alert alert-primary alert-dismissible"}>
                <span>{children}</span>
                <button type="button" className="btn-close" data-dismiss="alert" onClick={onClose}></button>
            </div>
        </>
    );
};

export default Alert;
