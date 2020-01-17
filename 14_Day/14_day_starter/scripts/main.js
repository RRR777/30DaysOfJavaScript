console.log(countries);
alert('Open the console and check if the countries has been loaded');

try {
    // code that may throw an error
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName;
  } catch (err) {
    //console.log(err); //OR
    console.error(err);
    console.log('Name of the error ', err.name);
    console.log('Error message ', err.message)
  } finally {
    // code to be executed regardless of an error occurs or not
  }

  const throwErroExampleFun = () => {
    let message;
    let x = prompt('Enter a number: ');
    try {
      if (x == '') throw 'empty';
      if (isNaN(x)) throw 'not a number';
      x = Number(x);
      if (x < 5) throw 'too low';
      if (x > 10) throw 'too high';
    } catch (err) {
      console.log(err);
    }
  }
  throwErroExampleFun();

//Error Types
//ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
    let firstName = 'Asabeneh';
    //let fullName = firstName + ' ' + lastName;

    //console.log(fullName);

//SyntaxError: A syntax error has occurred
    //let square = 2 x 2;
    //console.log(square);
    //Uncaught SyntaxError: Unexpected identifier

    //console.log('Hello, world");
    //Uncaught SyntaxError: Invalid or unexpected token

//TypeError: A type error has occurred
    //let num = 10;
    //console.log(num.toLowerCase());
    // main.js:49 Uncaught TypeError: num.toLowerCase is not a function
    //     at main.js:49
    //Uncaught SyntaxError: Identifier 'num' has already been declared
    //at <anonymous>:1:1

//   Exercises
// Exercises:Level 1
// Practice

// Exercises: Level 2
// Practice

// Exercises:Level
// Practice

const a = prompt('Enter a First number: ');
const b = prompt('Enter a Second number, but not 0: ');
console.log(typeof b); //string even if entered number
if (b !== '0') {
    console.log(a/b);
} else {
    throw 'Second number can not be 0';
}