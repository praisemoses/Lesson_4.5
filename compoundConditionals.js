// CODE ALONG

// 1. Create a secret username and password.
//  - The variables are declared already. Update the values.
let secretUsername = ("code@");
let secretPassword = ("123");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    let message = document.querySelector(".message");
    if (username==="code@" && password==="123") {
        message.innerHTML = "Success!"; 
        message.style.color = "black";    
    } else if (username==="code@" && password!=="123") {
        message.innerHTML = "Wrong password - be careful, don't mess this up too many times.";
    } else if (password==="123" && username!=="code@") {
        message.innerHTML = "Wrong username. - Is there a typo?";
    } else if (password!=="123" || username!=="code@") {
        message.innerHTML = "Incorrect username and password. Hmm. Suspicious.";
    } else if (username==="" && password==="") {
        message.innerHTML = "Please create an account.";
    } else {
    }
        
    // 2. Create a compound conditional statement to check for the following:
    //  - If the username AND password is correct, update the text of the message div to say "Success!"
    
    // CODE SOLO
    // 3. Create additional compound conditionals that check for the following:
    //  - If the username is correct AND the password is incorrect, update the text of the message div to say "Wrong password - be careful, don't mess this up too many times."
    //  - If the password is correct AND the username is incorrect, update the text of the message div to say "Wrong username - is there a typo?"
    //  - Finally, if the password is incorrect AND the username is incorrect, update the text of the message div to say "Incorrect username and password. Hmm. Suspicious."
    
    
    // Bonus: If the username OR password fields are empty, update the text of the message div to say "You need to enter SOMETHING."
    //  - Hint: What string represents an "empty" message.
    
});
