console.log(countries);
alert('Open the console and check if the countries has been loaded');

//Exercises: Level 1
const countriesLess = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
];

//1.Explain the difference between forEach, map, filter, and reduce.
const answer = ' \
    forEach -  \
        - Iterate an array elements \
        - change origin array \
        - take element,index and array parameters \
    map -  \
        - Iterate an array elements \
        - modify the array elements \
        - return new array \
        - take element and index parameters \
    filter,  \
        - Filter out items which full fill filtering conditions \
        - return a new array \
    reduce \
        -takes accumulator and current value as a parameter \
        -returns a single value ';

//2. Define a call function before you them in forEach, map, filter or reduce.

//3.Use forEach to console.log each country in the countries array.
    countriesLess.forEach(element => {
        console.log(element);
    });

//4.Use forEach to console.log each name in the names array.
    names.forEach(element => {
        console.log(element);
    });

//5.Use forEach to console.log each number in the numbers array.
    numbers.forEach(element => {
        console.log(element);
    });

//6.Use map to create a new array by changing each country to uppercase in the countries array.
    const countriesUppercase = countriesLess.map(country => country.toUpperCase());

    console.log(countriesUppercase);

//7. Use map to create an array of countries length from countries array.
    const countriesLength = countriesLess.map(country => country.length);

    console.log(countriesLength);

//8.Use map to create a new array by changing each number to square in the numbers array
    const numberSquare = numbers.map(number => number * number);

    console.log(numberSquare);

//9.Use map to change to each name to uppercase in the names array
    const namesUppercase = names.map(name => name.toUpperCase());

    console.log(namesUppercase);

//10.Use map to map the products array to its corresponding prices.

    const pricesArray = products.map(price => price.price);

    console.log(pricesArray);

//11.Use filter to filter out countries containing land.

    const countryWithLand = countriesLess.filter(country => country.toLocaleLowerCase().includes('land'));

    console.log(countryWithLand);

//12.Use filter to filter out countries having six character.
    const countrySixCharacters = countriesLess.filter(country => country.length === 6);

    console.log(countrySixCharacters);

//13.Use filter to filter out countries containing six letters and more in the country array.
    const countryMoreSixCharacters = countriesLess.filter(country => country.length >= 6);

    console.log(countryMoreSixCharacters);

//14.Use filter to filter out country start with 'E';
    const countryStartsE = countries.filter(country => country.name.startsWith('E'));

    console.log(countryStartsE);

//15.Use filter to filter out only prices with values.
    const priceValues = products.filter(item => item.price > 0);

    console.log(priceValues);

//16.Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
    function getStringLists(arr) {
        const stringArray = arr.filter(str =>typeof str === 'string');
        return stringArray;
    }

    console.log(getStringLists(['name', 5, 'city', 4, 'country']));

//17. Use reduce to sum all the numbers in the numbers array.
    const sumNumbers = numbers.reduce((accum, curr) => accum + curr);

    console.log(sumNumbers);

//18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
    const sumCountries = countriesLess.reduce((accum, curr) => accum + ', ' + curr);

    console.log(`${sumCountries} are north European countries`);

//19. Explain the difference between some and every
    // some -
    //     -Check if some of the elements are similar in one aspect
    //     - returns boolean
    // every- 
    //     -Check if all elements are similar in one aspect
    //     - returns boolean

//20. Use some to check if some names' length greater than seven in names array
    const nameLength = names.some(name => name.length > 7);

    console.log(nameLength);

//21. Use every to check if all the countries contain the word land
    const countryLand = countriesLess.every(country => country.includes('land'));

    console.log(countryLand);

//22. Explain the difference between find and findIndex.
    // find 
    //     -Return the first element which satisfies the condition
    // findIndex
    //     -Return the position of the first element which satisfies the condition

//23. Use find to find the first country containing only six letters in the countries array
    const countryFirstSixLetters = countriesLess.find(country => country.length === 6);

    console.log(countryFirstSixLetters);

//24. Use findIndex to find the position of the first country containing only six letters in the countries array
    const countryIndexFirstSixLetters = countriesLess.findIndex(country => country.length === 6);

    console.log(countryIndexFirstSixLetters);

//25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
    const countryPosition = countriesLess.findIndex(country => country === 'Norway');

    console.log(countryPosition);

//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const countryPositionNotExist = countriesLess.findIndex(country => country === 'Russia');

console.log(countryPositionNotExist);
console.log(countryPositionNotExist !== -1 ? countryPositionNotExist : `This country dosn't exist in array`);