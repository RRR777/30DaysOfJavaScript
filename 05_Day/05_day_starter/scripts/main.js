console.log(countries)
alert('Open the browser console whenever you work on JavaScript');
alert('Open the console and check if the countries has been loaded');
console.log(countries);

//1.Declare an empty array;
    let array = [];

//2. Declare an array with more than 5 number of elements
    let array1 = Array(6);

//3.Find the length of your array
    console.log(array.length);
    console.log(array1.length);

//4.Get the first item, the middle item and the last item of the array
    const myCountries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
    ];

    console.log(`First element of array is: ${myCountries[0]}`);
    console.log(`Middle element of array is: ${myCountries[Math.floor(myCountries.length/2)]}`);
    console.log(`Last element of array is: ${myCountries[myCountries.length-1]}`);

//5.Declare an array called mixedDataTypes,put different data types in your array and find length of the array. You are should size be greater than 5
    let mixedDataTypes = [
        5, 
        'Name', 
        {address: 'Kaunas', phone: 444444}, 
        true, 
        -10, 
        'Country'
    ];
    console.log(`Length of array is: ${mixedDataTypes.length}`);

//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];

// 7. Print the array using console.log()
    console.log(itCompanies);

//8.Print the number of companies in the array
    console.log(itCompanies.length);

//9. Print the first company, middle and last company
    console.log(`First element of array is: ${itCompanies[0]}`);
    console.log(`Middle element of array is: ${itCompanies[Math.floor(itCompanies.length/2)]}`);
    console.log(`Last element of array is: ${itCompanies[itCompanies.length-1]}`);

//10. Print out each company
    itCompanies.forEach(element => {
        console.log(`${element}`);
   });

//11.Change each company name to uppercase one by one and print them out
    itCompanies.forEach(element => {
        console.log(`${element.toUpperCase()}`);
    });

//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    let companies = itCompanies.slice(0,itCompanies.length-1);
    console.log(`${companies.join(', ')} and ${itCompanies[itCompanies.length-1]} are big IT companies.`);

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    let company = prompt('Enter company name');
    let companyName = company.charAt(0).toUpperCase() + company.toLowerCase().substring(1); 

    if ( itCompanies.includes(companyName) ) {
        console.log(`We found ${companyName}`);
    } else {
        console.log(`${companyName} not found`);
    }

//14. Filter out companies which have more than one 'o' without the filter method
    let filteredCompanies = [];
    itCompanies.forEach(element => {
        let count = 0;
        for (let i=0; i<element.length; i++ ) {
            if (element[i] === 'o' || element[i] === 'O') {
                count++;
            }
        }
        if ( count > 1 ) {
            filteredCompanies.push(element);
        }        
    });
    console.log(`${filteredCompanies}`);

//15.Sort the array using sort() method
    console.log(itCompanies.sort());

//16.Reverse the array using reverse() method
    console.log(itCompanies.reverse());

//17.Slice out the first 3 companies from the array
    console.log(itCompanies.slice(3));

//18.Slice out the last 3 companies from the array
    console.log(itCompanies.reverse());
    console.log(itCompanies.slice(0, itCompanies.length-3));

//19.Slice out the middle IT company or companies from the array
console.log(itCompanies);
//let removed = itCompanies.splice(1, 5);
//console.log(itCompanies);

//20.Remove the first IT company from the array
//let removed1 = itCompanies.splice(0, 1);
//console.log(itCompanies);

//21.Remove the middle IT company or companies from the array
let removed2 = itCompanies.splice(Math.floor(itCompanies.length/2), 1);
console.log(itCompanies);

//22. Remove the last IT company from the array
itCompanies.splice(itCompanies.length-1, 1);
console.log(itCompanies);

//23.Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

//Exercise: Level 2
//1.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js ans store the webTechs array in to this file. Access both file in main.js file

console.log(countries);
console.log(webTechs);

//2.First remove all the functions and change the string to array and count the number of words in the array

    // let text =
    // 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    // console.log(words)
    // console.log(words.length)
    // ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
    // 13

    let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    text = text.replace(/[,.]/g, '');
    let words = text.split(' ');
    console.log(words);
    console.log(words.length);

//3.In the following shopping cart add, remove, edit items
    // add 'Meat' in the beginning of your shopping cart if if it has not be already added
    // add sugar at the end of you shopping cart if it has not been already added
    // Remove 'Honey' if you are allergic to honey
    // modify tea to 'Green Tea'
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
    let meat = 'Meat';
    if ( shoppingCart[0] !== meat ) {
        shoppingCart.unshift(meat);
    }
    shoppingCart.push('Sugar');
    let isAlergic = prompt('Are you allergic to honey?');
    if ( isAlergic ) {
        let indexOfHoney = shoppingCart.indexOf('Honey');
        console.log(indexOfHoney);
        shoppingCart.splice(indexOfHoney, 1);
    }
    let indexOfTea = shoppingCart.indexOf('Tea');
    shoppingCart[indexOfTea] = 'Green Tea';
    console.log(shoppingCart);

//4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

    if ( allCountries.includes('Ethiopia') ) {
        console.log('ETHIOPIA');
    } else {
        allCountries.push('Ethiopia');
        console.log(allCountries);
    }

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

    if ( webTechs.includes('Sass') ) {
        console.log('Sass is a CSS preprocess');
    } else {
        webTechs.push('Sass');
        console.log(webTechs);
    }

//6.Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
//["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

//Exercise: Level 3
//1. The following is an array of 10 students ages:


    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

    // Sort the array and find the min and max age
    console.log(ages.sort());
    console.log(ages.reverse());

    // Find the min age and the max age
    console.log(Math.min(...ages));
    console.log(Math.max(...ages));

    // Find the median age(one middle item or two middle items divided by two)
    if ( ages.length%2 === 0) {
        console.log(`Middle items are: ${ages[ages.length/2-1]}, ${ages[ages.length/2]}`);
    } else {
        console.log(`Middle item is: ${ages[Math.ceil(ages.length/2-1)]}`);
    }
    
    // Find the average age(all items divided by number of items)
    let sum = 0;
    for ( let i=0; i < ages.length; i++ ) {
        sum += ages[i];
    }
    let average = sum/ages.length
    console.log(average); 

    // Find the range of the ages(max minus min)
    console.log(`Range of the ages is: `, Math.max(...ages) - Math.min(...ages));

    // Compare the value of (min - average) and (max - average), use abs() method 
    let minimum = Math.min(...ages);
    let maximum = Math.max(...ages);
    
    if ( Math.abs(minimum - average) > Math.abs(maximum - average)) {
        console.log( `(min - average) `, Math.abs(minimum - average), `is more than (max - average): `,  Math.abs(maximum - average));
    } else {
        console.log( `(min - average) `, Math.abs(minimum - average), `is less than (max - average): `,  Math.abs(maximum - average));
    }


//2.Find the middle country(ies) in the countries array  

if ( allCountries.length%2 === 0) {
    console.log(`Middle Countries are: ${allCountries[allCountries.length/2-1]}, ${allCountries[allCountries.length/2]}`);
} else {
    console.log(`Middle Countries is: ${allCountries[Math.ceil(allCountries.length/2-1)]}`);
}

//3.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
    let halfwayThrough = Math.ceil(allCountries.length / 2)

    let arrayFirstHalf = allCountries.slice(0, halfwayThrough);
    let arraySecondHalf = allCountries.slice(halfwayThrough, allCountries.length);

    console.log(arrayFirstHalf);
    console.log(arraySecondHalf);

//Slice the first ten countries from the countries array

console.log(allCountries.slice(10));