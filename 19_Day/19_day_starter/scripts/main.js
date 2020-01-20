//console.log(countries);
alert('Open the console and check if the countries has been loaded');

// Exercises
// Exercises: Level 1
//1. Create a closure which has one inner function
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        return count;
    }

    return innerFunction;
}
const innerFunc = outerFunction();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

// Exercises: Level 2
//1. Create a closure which has three inner functions
function outerFunctions() {
    let count = 0;
    function firstInnerFunction() {
        count++;
        return count;
    }

    function secondInnerFunction() {
        count += 2;
        return count;
    }

    function thirdInnerFunction() {
        count += 3;
        return count;
    }

    return {
        firstInnerFunction: firstInnerFunction,
        secondInnerFunction: secondInnerFunction,
        thirdInnerFunction: thirdInnerFunction
    }
}
const innerFunction = outerFunctions();

console.log(innerFunction.firstInnerFunction());
console.log(innerFunction.secondInnerFunction());
console.log(innerFunction.thirdInnerFunction());
console.log(innerFunction.thirdInnerFunction());
console.log(innerFunction.thirdInnerFunction());
console.log(innerFunction.secondInnerFunction());

// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = () => {
    const firstName = 'Rita'
    const lastName = 'Jarmalaviciene'
    const incomes = {
        salary: 2000, 
        bonus: 1000
    }
    const expenses = {
        food: 300,
        car: 200,
        sport: 100
    }

    function totalIncome() {
        return addIncome();
    }

    function totalExpense() {
        return addExpense();
    }

    function accountInfo() {
        return firstName + ' ' + lastName;
    }

    function addIncome() {
        const allIncomes = Object.values(incomes);
        let sum = allIncomes.reduce((sum, num) => sum + num);

        return sum;
    }

    function addExpense() {
        const allExpences = Object.values(expenses);
        let sum = allExpences.reduce((sum, num) => sum + num);

        return sum;
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        totalIncome: totalIncome,
        totalExpense: totalExpense,
        accountInfo: accountInfo,
        accountBalance: accountBalance
    }
}

const person = personAccount();
console.log(`Person Acount Info: ${person.accountInfo()}`);
console.log(`Total incomes are: ${person.totalIncome()} Eur`);
console.log(`Total expences are: ${person.totalExpense()} Eur`);
console.log(`Total account Balance is: ${person.accountBalance()} Eur`);
