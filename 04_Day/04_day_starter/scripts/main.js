// this is your main.js script

alert('Open the browser console whenever you work on JavaScript');

//Exercises: Level 1
//1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.

    // Enter your age: 30
    // You are old enough to drive.

    // Enter your age:15
    // You are left with 3 years to drive.

    let userAge = prompt("Enter your age");
    console.log(`Enter your age ${userAge}`);

    userAge > 18 ? 
        console.log(`You are old enough to drive.`) :
        console.log(`You are left with ${18-userAge} years to drive.`);

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

    // Enter your age: 30
    // You are 5 years older than me.

    let myAge = 45;
    let yourAge = prompt('Enter your age:');
    console.log(`Enter your age ${yourAge}`);

    if (myAge > yourAge) {
        console.log(`I am ${myAge-yourAge} years older than you.`);
    } else if (myAge < yourAge) {
        console.log(`You are ${yourAge-myAge} years older than me.`);
    }

//3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement in to ways

        // using if else
        // ternary operator.
        let a = 4
        let b = 3
        // 4 is greater than 3 

        if (a > b) {
            console.log(`${a} is greater than ${b}`);
        } else if (a < b) {
            console.log(`${a} is less than ${b}`);
        }

        a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

//4.Even numbers are divisible by 2 and the remainder is zero. How do you check if a number is even or not using JavaScript?

    // Enter a number: 2
    // 2 is an even number

    // Enter a number 9
    // 9 is is an odd number.
    let number = prompt('Enter number');

    if ( number % 2 === 0 ) {
        console.log(`${number} is an even number.`);
    } else {
        console.log(`${number} is an odd number.`);
    }
   
//Exercises: Level 2
    //1. Write a code which give grade students according to theirs scores:

        // 80-100, A
        // 70-89, B
        // 60-69, C
        // 50-59, D
        // 0 -49, F

        let score = prompt('Enter grade');

        if ( score < 50 ) {
            console.log(`Your score is ${score} and your grade is F`);
        } else if (score < 60) {
            console.log(`Your score is ${score} and your grade is D`);
        } else if (score < 70) {
            console.log(`Your score is ${score} and your grade is C`);
        } else if (score < 80) {
            console.log(`Your score is ${score} and your grade is B`);
        } else if (score <= 100) {
            console.log(`Your score is ${score} and your grade is A`);
        } else {
            console.log(`Your score is wrong`);
        }
    
    //2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is:

    // September, October or November, the season is Autumn.
    // December, January or February, the season is Winter.
    // March, April or May, the season is Spring
    // June, July or August, the season is Summer

    let inputMonth = prompt('Enter month');

        switch (inputMonth.toLowerCase()) {
            case 'september': 
            case 'october': 
            case 'november': 
                console.log('the season is Autumn.');
                break;
            case 'december': 
            case 'january': 
            case 'february': 
                console.log('the season is Winter.');
                break;
            case 'march': 
            case 'april': 
            case 'may': 
                console.log('the season is Spring.');
                break;
            case 'june': 
            case 'july': 
            case 'august': 
                console.log('the season is Summer.');
                break;
            default:
                console.log('It is not a month.');
        }


//3. Check if a day is weekend day or a working day. Your script will take day as an input.

    // What is the day is today? Saturday
    // Saturday is a weekend day.

    // What is the day today? saturDaY
    // Saturday is a weekend day.

    // What is the day today? Friday
    // Friday is a work day.

    // What is the day today? FrIDAy
    // Friday is a work day.

    let inputDay = prompt('What is the day is today?');
    console.log(`What is the day is today? ${inputDay}`);
    let weekday = inputDay.charAt(0).toUpperCase() + inputDay.toLowerCase().substring(1);
    switch (weekday) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            console.log(`${weekday} is a work day.`);
            break;
        case 'Saturday':
        case 'Sunday':
            console.log(`${weekday} is a weekend day.`);
            break;
        default:
            console.log(`You entered wrong day.`);
    }

//Exercises: Level 3
//1.Write a program which tells the number days in a month.
    let inputMonthName = prompt('How many days has this month?');
    console.log(`How many days has this month? ${inputMonthName}`);
    let monthName = inputMonthName.charAt(0).toUpperCase() + inputMonthName.toLowerCase().substring(1);
    switch (monthName) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            console.log(`${monthName} has 31 days.`);
            break;
        case 'February':
            console.log(`${monthName} has 28 days.`);
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            console.log(`${monthName} has 30 days.`);
            break;
        default:
            console.log(`You entered wrong month name.`);
    }
