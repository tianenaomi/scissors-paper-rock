function getComputerChoice() {

}

console.log();

// PROBLEM
// User selects 1 of 3 options
// Computer selects 1 0f 3 options
// User and Computer selections revealed simultaneously
// Winner is declared  
    // OR tie
    // if tie, run again


// PLAN
// Interface = false. User will type selection in DevTools Console
// Desired output = reveal computer selection + user selection + message


// PSEUDOCODE
// INPUT string by user via console
// "INPUT" random string by computer
// DECLARE variable for user selection
// DECLARE variable for computer selection
// DECLARE variable for outcome
// COUNT user vs computer round results
// RETURN round count after each game (ie. 1 user, 2 computer)
// IF user > computer
    // RETURN user round winner message and count
        // THEN run sequence again
// ELSE user < computer
    // RETURN user round loser message and count
        // THEN run sequence again
// ELSE user = computer
        // RETURN tie message 
        // THEN run sequence again
        // DISCARD tie result (do not count)
// IF sum of results < 5
    // THEN run sequence again
// ENDIF user win count = 3
        // RETURN user game winner message
    // OR computer win count = 3
        // RETURN user game loser message
    // OR total round count === 5
        // RETURN user game winner/loser message based on final round result
