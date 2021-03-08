console.log("Jeffry's Output from Tutorial 4 Example 3");

let password = String(prompt("Enter your password:"))

let attempts = 1;

const pass = "secret"

while (attempts < 3){
    if (password !== pass){
        password = String(prompt("Enter your password:"))
        alert(`You've entered the incorrect password ${attempts}`);
        attempts++;
    }
}

