console.log("Jeffry's Output from Tutorial 4 Example 3");
/*
let password = String(prompt("Enter your password:"))

let attempts = 1;

const pass = "secret"

while (attempts < 3){
    if (password === pass){
        document.write("Welcome, you are now logged in")
        document.write(`It took you ${attempts} to log in`)
    }else if (password !== pass){
        password = String(prompt("Enter your password:"))
        alert(`You've entered the incorrect password ${attempts}`);
        attempts++;
    } 
}
*/

var password = "wordpass";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

while(response != password && !error){
    if(entryCount < entryLimit){
        response = window.prompt("Enter Password:")
        entryCount++;
    }else{
        error = true;
    }

}

if(error){
    alert("Too many entries ");
}else{
    alert("You've successfully logged in");
}

