console.log(countries);
alert('Open the console and check if the countries has been loaded');

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const text = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
// Exercises Level 1
//1. Change skills array to JSON using JSON.stringify()
    const jsonSkils = JSON.stringify(skills);
    console.log(jsonSkils);

//2. Stringify the age variable
    const jsonAge = JSON.stringify(age);
    console.log(jsonAge);

//3. Stringify the isMarried variable
    const jsonIsMarried = JSON.stringify(isMarried);
    console.log(jsonIsMarried);

//4. Stringify the student object
    const jsonStudent = JSON.stringify(student);
    console.log(jsonStudent);

// Exercises Level 2
// 1. Stringify the students object with only firstName, lastName and skills properties
    const jsonStudentPart = JSON.stringify(student, ['firstName', 'lastName', 'skills']);
    console.log(jsonStudentPart);
// Exercises Level 3
// 1. Parse the text JSON to object.
    const textObj = JSON.parse(text, undefined, 4);
    console.log(textObj);

// 2. Find the the user who has many skills.
    let userWithManyskills = '';
    let max = 0;
    for (const element in textObj) {
        if (textObj[element].skills.length > max) {
            max = textObj[element].skills.length;
            userWithManyskills = element;
        }
    }
    console.log(`User with many skills is ${userWithManyskills} and have ${max} skills.`);