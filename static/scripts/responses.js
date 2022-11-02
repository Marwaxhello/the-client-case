function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "Hallo") {
        return "Hallo, Welkom!";
    } else if (input == "Bedankt") {
        return "Graag gedaan tot ziens!";
    } else {
        return "Try asking something else!";
    }
}
