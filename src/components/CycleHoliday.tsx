import React, { useState } from "react";
import { Button } from "react-bootstrap";

<<<<<<< HEAD

type Holiday = "🎄" | "🎃" | "🦃" | "🎏" | "🪔";
export function CycleHoliday(): React.JSX.Element {
    const holidays: Holiday[] = ["🎄", "🎃", "🦃", "🎏", "🪔"];

    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(holidays[0]);

    const getNextHolidayByAlphabet = (current: Holiday): Holiday => {
        const sortedHolidays = [...holidays].sort();
        const currentIndex = sortedHolidays.indexOf(current);
        return sortedHolidays[(currentIndex + 1) % sortedHolidays.length];
    };

    const getNextHolidayByYear = (current: Holiday): Holiday => {
        const currentIndex = holidays.indexOf(current);
        return holidays[(currentIndex + 1) % holidays.length];
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={() => {setCurrentHoliday(getNextHolidayByAlphabet(currentHoliday))}}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => {setCurrentHoliday(getNextHolidayByYear(currentHoliday))}}>
                Advance by Year
            </Button>
        </div>
    );
=======
export function CycleHoliday(): React.JSX.Element {
    return <div>Cycle Holiday</div>;
>>>>>>> origin/task-forms
}
