import React, { useState } from "react";
import { Button } from "react-bootstrap";
<<<<<<< HEAD

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState(10);

    function handleDouble() {
        setDhValue((prev) => prev * 2);
    }

    function handleHalve() {
        setDhValue((prev) => prev * 0.5);
    }

=======
import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
>>>>>>> origin/task-forms
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
<<<<<<< HEAD
            <Button onClick={handleDouble} data-testid="double-button">Double</Button>
            <Button onClick={handleHalve} data-testid="halve-button">Halve</Button>
=======
            <Doubler></Doubler>
            <Halver></Halver>
>>>>>>> origin/task-forms
        </div>
    );
}
