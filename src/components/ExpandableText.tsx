import { useState } from "react";

interface Props {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
    const [isExpnaded, setExpnaded] = useState(false);
    if (children.length <= maxChars) return <p>{children}</p>;

    const text = isExpnaded ? children : children.substring(0, maxChars);
    return (
        <p>
            {text}...<button onClick={() => setExpnaded(!isExpnaded)}>{isExpnaded ? "Less" : "More"}</button>
        </p>
    );
};

export default ExpandableText;
