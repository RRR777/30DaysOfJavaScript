// Exercises
// Exercises: Level 1
//1.  Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Rita');
localStorage.setItem('lastName', 'Pavarde');
localStorage.setItem('age', 35);
localStorage.setItem('country', 'Lithuania');
localStorage.setItem('city', 'Kaunas');
console.log(localStorage);

// Exercises: Level 2
//1.  Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName: 'Vardas',
    lastName: 'Pavarde',
    age: 25,
    skills: ['HTML', 'CSS', 'JS', 'React'],
    country: 'Lithuania',
    enrolledKeys: [1, 7, 85]
}

const studentText = JSON.stringify(student, undefined, 4);
localStorage.setItem('student', studentText);

// Exercises: Level 3
//1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

