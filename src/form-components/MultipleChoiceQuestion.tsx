import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selectedOption}
                onChange={(e) => {setSelectedOption(e.target.value)}}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>{selectedOption === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
