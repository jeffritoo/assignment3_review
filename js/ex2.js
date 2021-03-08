/* Tutorial 4 Example 1 JavaScript code */ 


console.log("Jeffry's Output from Tutorial 4 Example 2");

const dayOfweek = prompt('Pick a day of the week:')

if ((dayOfweek === dayOfweek.toLowerCase()) && (dayOfweek.length === 3 )){
    switch (dayOfweek){
        case 'mon':
            console.log('tue');
            break;
        
        case 'tue':
            console.log('wed');
            break;    
        
        case 'wed':
            console.log('thu');
            break;
            
        case 'thu':
            console.log('fri');
            break;
            
        case 'fri':
            console.log('sat');
            break;

        case 'sat':
            console.log('sun');
            break;
        
        case 'sun':
            console.log('mon');
            break;
    }
}

if ((dayOfweek !== dayOfweek.toLowerCase()) | (dayOfweek.length !== 3 )){

    console.log('Your entry must be lowercase and 3 characters long!')

    const dayOfweek = prompt('Pick a day of the week:')

    switch (dayOfweek){
        case 'mon':
            console.log('tue');
            break;
        
        case 'tue':
            console.log('wed');
            break;    
        
        case 'wed':
            console.log('thu');
            break;
            
        case 'thu':
            console.log('fri');
            break;
            
        case 'fri':
            console.log('sat');
            break;

        case 'sat':
            console.log('sun');
            break;
        
        case 'sun':
            console.log('mon');
            break;
    }
}




/*
switch (dayOfweek){
    case 'mon':
        console.log('tue');
        break;
}
*/