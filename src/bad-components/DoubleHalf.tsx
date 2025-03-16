import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState(10);

    function handleDouble() {
        setDhValue((prev) => prev * 2);
    }

    function handleHalve() {
        setDhValue((prev) => prev * 0.5);
    }

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={handleDouble} data-testid="double-button">Double</Button>
            <Button onClick={handleHalve} data-testid="halve-button">Halve</Button>
        </div>
    );
}
