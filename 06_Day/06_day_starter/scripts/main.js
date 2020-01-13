console.log(countries);
alert('Open the console and check if the countries has been loaded');

//1.Iterate 0 to 10 using for loop, do the same using while and do while loop
for ( let i=0; i<=10; i++ ) {
    console.log(i);
}

let j = 0;
while ( j<=10 ) {
    console.log(j);
    j++;
}
 
let x=0;
do {
    console.log(x);
    x++;
} while ( x<=10 );

//2.Iterate 10 to 0 using for loop, do the same using while and do while loop
for ( let i=10; i>=0; i-- ) {
    console.log(i);
}

j = 10;
while ( j>=0 ) {
    console.log(j);
    j--;
}

x=10;
do {
    console.log(x);
    x--;
} while ( x>=0 );

//3.Iterate 0 to n using for loop
let n = prompt('Enter number n');
for ( let i=0; i<=n; i++ ) {
    console.log(i);
}

//4.Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
let symbol = '#';
for ( let i=0; i<=7; i++ ) {
    console.log(symbol.repeat(i));
}

//5.Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for ( let i=0; i<=10; i++ ) {
    console.log(`${i} x ${i} = ${i * i}`);
}

//6.Using loop print the following pattern

// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

console.log(`i\t\ti^2\t\ti^3`);
for ( let i=0; i<=10; i++ ) {
    console.log(`${i}\t\t${i*i}\t\t${i*i*i}`);
}

//7.Use for loop to iterate from 0 to 100 and print only even numbers
for ( let i=0; i<=100; i++ ) {
    if ( i % 2 === 0 ) {
        console.log(i);
    }    
}

//8.Use for loop to iterate from 0 to 100 and print only odd numbers
for ( let i=0; i<=100; i++ ) {
    if ( i % 2 !== 0 ) {
        console.log(i);
    }    
}

//9.Use for loop to iterate from 0 to 100 and print only prime numbers
var sieve = [], primes = [];
for (i = 2; i <= 100; ++i) {
    if (!sieve[i]) {
        primes.push(i);
        console.log(i);
        for (j = i << 1; j <= 100; j += i) {
            sieve[j] = true;
        }
    }
}

//10.Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.

//The sum all numbers is 5050.
let sumNumbers = 0;
for ( let i=0; i<=100; i++ ) {
    sumNumbers += i;        
}
console.log(sumNumbers);

//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

//The sum of all evens is 2550. And the sum of all odds is 2500.
let sumOddNumbers = 0;
let sumEvenNumbers = 0;
for ( let i=0; i<=100; i++ ) {
    if ( i % 2 === 0 ) {
        sumEvenNumbers += i;   
    }   
    if ( i % 2 !== 0 ) {
        sumOddNumbers += i;   
    }      
}
console.log(`The sum of all evens is ${sumEvenNumbers}. And the sum of all odds is ${sumOddNumbers}.`);

//12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sums = [0, 0];
for ( let i=0; i<=100; i++ ) {
    if ( i % 2 === 0 ) {
        sums[0] += i;   
    }   
    if ( i % 2 !== 0 ) {
        sums[1] += i;      
    }      
}
console.log(sums);

//13.Develop a small script which generate array of 5 random numbers
let randArray = [];
for ( let i=0; i<5; i++ ) {
    randArray[i] = Math.floor(Math.random()*11);
}
console.log(randArray);

//14.Develop a small script which generate array of 5 random numbers and the numbers must be unique

let randUniqueArray = [];
do {
    value = Math.floor(Math.random()*11);
    if ( !randUniqueArray.includes(value) ) {
        randUniqueArray[randUniqueArray.length] = value;
    }
} while ( randUniqueArray.length < 5 )
console.log(randUniqueArray);

//15.Develop a small script which generate a six characters random id:

// 5j2khz
//let pass = Math.random().toString(36).substring(2, 8);
//arba
let pass = '';
let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
for ( let i=0; i<6; i++ ) {
    pass += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(pass);

/* The toString method of a number type in javascript takes an optional parameter to convert the number into a given base. If you pass two, for example, you'll see your number represented in binary. Similar to hex (base 16), base 36 uses letters to represent digits beyond 9. By converting a random number to base 36, you'll wind up with a bunch of seemingly random letters and numbers.  */

//Exercises: Level 2
//1.Develop a small script which generate a any number of characters random id:

// fe3jo1gl124g
// xkqci4utda1lmbelpkm03rba

let password = '';
let character = 'abcdefghijklmnopqrstuvwxyz0123456789';
let numb = prompt('Enter password length');
for ( let i=0; i<numb; i++ ) {
    password += character.charAt(Math.floor(Math.random() * character.length));
}
console.log(password);
//2.Write a script which generates a random hexadecimal number.
    //'#ee33df'
    const randomHexaNumberGenerator = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    console.log(randomHexaNumberGenerator());

//3. Write a script which generates a random rgb color number.
    //rgb(240,180,80)
    function rgbColorGenerator() {
        let rgb = 'rgb(';
        for ( let i=0; i<2; i++ ) {
            rgb += Math.floor(Math.random() * 256);
            rgb += ',';
        }
        rgb += Math.floor(Math.random() * 256);
        rgb += ')';

        return rgb;
    }
    console.log(rgbColorGenerator());

//4.Using the above countries array, create the following new array.

    //["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", ]

    let newCountriesArray = [];
    countries.forEach(element => {
        newCountriesArray.push(element.toUpperCase());
    });
    console.log(newCountriesArray);

//5.Using the above countries array, create an array for countries length'.

    // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    let countriesLength = [];

    countries.forEach(element => {
        countriesLength.push(element.length);
    });
    console.log(`These are countries length ${countriesLength}`);

//6.Use the countries array to create the following array of arrays:
    // [
    //     ['Albania', 'ALB', 7],
    //     ['Bolivia', 'BOL', 7],
    //     ['Canada', 'CAN', 6],
    //     ['Denmark', 'DEN', 7],
    //     ['Ethiopia', 'ETH', 8],
    //     ['Finland', 'FIN', 7],
    //     ['Germany', 'GER', 7],
    //     ['Hungary', 'HUN', 7],
    //     ['Ireland', 'IRE', 7],
    //     ['Japan', 'JAP', 5],
    //     ['Kenya', 'KEN', 5]
    // ]
    let fullArray = [];
    countries.forEach(element => {
        fullArray.push([element, element.slice(0, 3).toUpperCase(), element.length]);

    });
    console.log(fullArray);

//7.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'These are countries without land'.

    // ['Finland', 'Iceland']
    let countriesWithLand = [];
    let countriesWithoutLand = [];

    countries.forEach(element => {
        //if ( element.slice(element.length-4) === 'land' ) {
        if (element.includes('land', element)) {
            countriesWithLand.push(element);
        } else {
            countriesWithoutLand.push(element);
        }
    });
    console.log(`These are countries are with 'land' ${countriesWithLand}`);
    console.log(`These are countries are without 'land' ${countriesWithoutLand}`);

//8. In above countries array, check if there a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'land', print 'These are countries ends without ia'.

    // ['Albania', 'Bolivia','Ethiopia']
    let countriesWithIa = [];
    let countriesWithoutIa = [];

    countries.forEach(element => {
        if ( element.slice(element.length-2) === 'ia' ) {
            countriesWithIa.push(element);
        } else {
            countriesWithoutIa.push(element);
        }
    });
    console.log(`These are countries are with 'ia' ${countriesWithIa}`);
    console.log(`These are countries are without 'ia' ${countriesWithoutIa}`);



//9.Using the above countries array, find the country containing the biggest number of characters.

    //Ethiopia
    let maxLength = 0;
    let maxLengthCountry = '';

    countries.forEach(element => {
        if ( element.length > maxLength ) {
            maxLength = element.length;
            maxLengthCountry = element;
        } 
    });
    console.log(`The max length ${maxLength} country is ${maxLengthCountry}`);

//10.Using the above countries array, find the country containing only 5 characters.

    //['Japan', 'Kenya']
    let countryLength = 5;
    let countriesArray = [];

    countries.forEach(element => {
        if ( element.length === countryLength ) {
            countriesArray.push(element);
        } 
    });
    console.log(`The length ${countryLength} countries are ${countriesArray}`);
    console.log(countriesArray);

//11.Find the longest word in the webTechs array
    maxLength = 0;
    let maxLengthTech = '';

    webTechs.forEach(element => {
        if ( element.length > maxLength ) {
            maxLength = element.length;
            maxLengthTech = element;
        } 
    });
    console.log(`The max length ${maxLength} tech is ${maxLengthTech}`);

//12.Use the webTechs are to create the following array of arrays:

    //[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    let newWebTechs = [];
    webTechs.forEach(element => {
        newWebTechs.push([element, element.length]);
    });
    console.log(newWebTechs);

//13.An application created using MongoDB, Express, React and Node is called a MERN stack. Create the acronym MERN by using the array mernStack
    let mernStack = ['MongoDB', 'Express', 'React', 'Node'];
    let acronym = '';

    mernStack.forEach(element => {
        acronym += element[0];
    });
    console.log(acronym);

//14.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

    webTechs.forEach(element => {
        console.log(element);
    });

//15.This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
    let fruits = ['banana', 'orange', 'mango', 'lemon'];
    let reverceFruits = [];

    for ( let i=fruits.length-1; i>=0; i-- ) {
        reverceFruits.push(fruits[i]);
    }
    console.log(reverceFruits);

//16.Print all the elements of array as shown below.

    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ]
    // HTML
    // CSS
    // JS
    // REACT
    // NODE
    // EXPRESS
    // MONGODB
    fullStack.forEach(element => {
        element.forEach(elem => {
            console.log(elem);
        });
    });

//Exercises: Level 3
//1. Copy countries array(Avoid mutation)
    const newCountries = countries.slice();

    newCountries[0] = 'Hello';

    console.log(countries);
    console.log(newCountries);

//2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
    const sortedCountries = countries.slice();
    sortedCountries.sort();

    console.log(sortedCountries);

//3.Sort the webTechs array and mernStack array
    console.log(`MernStack array ${mernStack}`);
    console.log(`webTechs array ${webTechs}`);
    
    const thirdList = mernStack.concat(webTechs).sort();
    console.log(thirdList);

//4.Extract all the countries contain the word 'land' from the countries array and print it as array

    countriesWithLand = [];
    countriesWithoutLand = [];

    countries.forEach(element => {
    if ( element.slice(element.length-4) === 'land' ) {
        countriesWithLand.push(element);
    } 
    });
    console.log(`These are countries are with land ${countriesWithLand}`);
    console.log(countriesWithLand);

//5.Find the country containing the hightest number of characters in the countries array
    maxLength = 0;
    maxLengthCountry = '';

    countries.forEach(element => {
        if ( element.length > maxLength ) {
            maxLength = element.length;
            maxLengthCountry = element;
        } 
    });
    console.log(`The max length ${maxLength} country is ${maxLengthCountry}`);

//6.Extract all the countries contain the word 'land' from the countries array and print it as array

    countriesWithLand = [];
    countriesWithoutLand = [];

    countries.forEach(element => {
    if ( element.slice(element.length-4) === 'land' ) {
        countriesWithLand.push(element);
    } 
    });
    console.log(`These are countries are with land ${countriesWithLand}`);

    console.log(countriesWithLand);

//7.Extract all the countries containing only four characters from the countries array and print it as array

    countryLength = 4;
    countriesArray = [];

    countries.forEach(element => {
        if ( element.length === countryLength ) {
            countriesArray.push(element);
        } 
    });
    console.log(`The length ${countryLength} countries are ${countriesArray}`);
    console.log(countriesArray);

//8.Extract all the countries containing two or more words from the countries array and print it as array
    let space = ' ';
    countriesArray = [];

    countries.forEach(element => {
        if ( element.includes(space) ) {
            countriesArray.push(element);
        } 
    });
    console.log(countriesArray);

//9.Reverse the countries array and capitalize each country and stored it as an array

    const reverceCountries = [];

    for ( let i=countries.length-1; i>=0; i-- ) {
        reverceCountries.push(countries[i].toUpperCase());
    }
    console.log(reverceCountries);