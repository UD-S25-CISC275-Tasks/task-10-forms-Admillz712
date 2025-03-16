import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

<<<<<<< HEAD
function ChangeColor({ setColorIndex }: { setColorIndex: React.Dispatch<React.SetStateAction<number>> }): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);            }}
=======
function ChangeColor(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) % COLORS.length);
            }}
>>>>>>> origin/task-forms
        >
            Next Color
        </Button>
    );
}

<<<<<<< HEAD
function ColorPreview({ colorIndex }: { colorIndex: number }): React.JSX.Element {
=======
function ColorPreview(): React.JSX.Element {
>>>>>>> origin/task-forms
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
<<<<<<< HEAD
                backgroundColor: COLORS[colorIndex],
=======
                backgroundColor: COLORS[DEFAULT_COLOR_INDEX],
>>>>>>> origin/task-forms
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
<<<<<<< HEAD
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

=======
>>>>>>> origin/task-forms
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
<<<<<<< HEAD
                <ChangeColor setColorIndex={setColorIndex} />
                <ColorPreview colorIndex={colorIndex} />
=======
                <ChangeColor></ChangeColor>
                <ColorPreview></ColorPreview>
>>>>>>> origin/task-forms
            </div>
        </div>
    );
}
