/* Tutorial 4 Example 1 JavaScript code */ 


console.log("Jeffry's Output from Tutorial 4 Example 1");

const username = String(prompt("Please enter your Full Name?:"));

const units = Number(prompt("Enter the number of units completed:"));

if (units >= 0){
    if(units <= 30){
        console.log(username + 'is a freshman');
    }else if((units>=31) && (units<=60)){
        console.log(username + 'is a sophmore');
    }else if((units>=61) && (units<=90)){
        console.log(username + 'is a junior');
    }else if(units>91){
        console.log(username + 'is a senior');
    }
}

if (units < 0){

    console.log('You must enter a value greater than 0');

    const username = String(prompt("Please enter your Full Name?:"));

    const units = Number(prompt("Enter the number of units completed:"));

    if(units <= 30){
        console.log(username + 'is a freshman');
    }else if((units>=31) && (units<=60)){
        console.log(username + 'is a sophmore');
    }else if((units>=61) && (units<=90)){
        console.log(username + 'is a junior');
    }else if(units>91){
        console.log(username + 'is a senior');
    }
}