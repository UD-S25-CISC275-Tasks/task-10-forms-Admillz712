import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <div>
            <Button onClick={handleClick}>Reveal Answer</Button>
            {isVisible && <span>42</span>}
        </div>
    );
}
