// Write a switch statement that:

// 1. Takes a variable `day` containing a day of the week (e.g., "Monday")
// 2. Prints whether the day is a "Weekday", "Weekend", or "Invalid day"
// 3. Also prints a custom message for each day (e.g., "Monday - Start of the work week!")
// 4. Test it with at least 3 different day values


const determineDay = (day) => {
    const normalizedDay = String(day).toLowerCase().trim();
    let type;
    let message;

    switch (normalizedDay) {
        case "monday":
            type = "Weekday";
            message = "Monday - Start of the work week!";
            break;
        case "tuesday":
            type = "Weekday";
            message = "Tuesday - Keep the momentum going!";
            break;
        case "wednesday":
            type = "Weekday";
            message = "Wednesday - Halfway there!";
            break;
        case "thursday":
            type = "Weekday";
            message = "Thursday - Almost the weekend!";
            break;
        case "friday":
            type = "Weekday";
            message = "Friday - Wrap it up strong!";
            break;
        case "saturday":
            type = "Weekend";
            message = "Saturday - Time to relax!";
            break;
        case "sunday":
            type = "Weekend";
            message = "Sunday - Rest and reset!";
            break;
        default:
            type = "Invalid day";
            message = `"${day}" is not a valid day.`;
            break;
    }

    console.log(type);
    console.log(message + "\n");
};

const testDays = ["Monday", "saturday", "Funday", "  Sunday", 4]

testDays.forEach(day => determineDay(day));