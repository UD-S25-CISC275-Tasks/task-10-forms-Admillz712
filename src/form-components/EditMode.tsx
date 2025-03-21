import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <label className="form-switch">
                <input
                    type="checkbox"
                    checked={isEditMode}
                    onChange={() => {setIsEditMode(!isEditMode)}}
                />
                Edit Mode
            </label>
            {isEditMode ? (
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => {setIsStudent(!isStudent)}}
                        />
                        Student
                    </label>
                </div>
            ) : (
                <p>{name} is {isStudent ? "a student" : "not a student"}.</p>
            )}
        </div>
    );
}
