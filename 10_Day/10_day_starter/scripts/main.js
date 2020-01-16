console.log(countries);
alert('Open the console and check if the countries has been loaded');

// Exercises
// Exercises:Level 1
// const a = {4, 5, 8, 9};
// const b = {3, 4, 5, 7};
// const countries = ['Finland', 'Sweden', 'Norway'];
//1. create an empty set
    const newSet = new Set();
    console.log(newSet);

//2. Create a set containing 0 to 10 using loop
    for (let i =0; i <= 10; i++) {
        newSet.add(i);
    }
    console.log(newSet);

//3. Remove an element from a set
    newSet.delete(5);
    console.log(newSet);

//4. Clear a set
    newSet.clear();
    console.log(newSet);

//5. Create a set of 5 string elements from array
    const names = ['Rita', 'Rasa', 'Vilius', 'Marius', 'John'];
    const namesSet = new Set(names);

    console.log(namesSet);
    console.log(namesSet.size);

//6. Create a map of countries and number of characters of a country
    const myCountries = ['Finland', 'Sweden', 'Norway'];
    const countriesMap = new Map();
    for (let i =0; i < myCountries.length; i++) {
        countriesMap.set(myCountries[i], myCountries[i].length );
    }

    console.log(countriesMap);

// Exercises:Level 2
    const a = [4, 5, 8, 9];
    const b = [3, 4, 5, 7];
//1. Find a union b
    //To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)

    let c = [...a, ...b];

    let A = new Set(a);
    let B = new Set(b);
    let C = new Set(c);

    console.log(C)

//2. Find a intersection b
    //To find an intersection of two sets can be achieved using filter. Lets find the union of set A and set B (A ∩ B)
    let c1 = a.filter(num => B.has(num));
    let C1 = new Set(c1);

    console.log(C1);
//3. Find a with b
    //To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)
    let c2 = a.filter(num => !B.has(num))
    let C2 = new Set(c2)

    console.log(C2)

// Exercises:Level 3
//1. Use the countries data to find the 10 most spoken languages:
function mostSpokenLanguages(countries, number) {
    const languages = [];
    countries.forEach(country => {
        for (let i=0; i<country.languages.length; i++) {
            languages.push(country.languages[i]); 
        }
    });

    const langSet = new Set(languages);

    const counts = [];
    const count = {};

    for (const language of langSet) {
    const filteredLang = languages.filter(lng => lng === language);
    counts.push({ count: filteredLang.length, lang: language, count: filteredLang.length });
    }

    counts.sort(function(a, b) {
        if (a.count < b.count) return 1
        if (a.count > b.count) return -1
        return 0
    })
    
    return counts.slice(0, number);
}

console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));
// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [(91, 'English'),
// (45, 'French'),
// (25, 'Arabic'),
// (24, 'Spanish'),
// (9, 'Russian'),
// (9, 'Portuguese'),
// (8, 'Dutch'),
// (7, 'German'),
// (5, 'Chinese'),
// (4, 'Swahili'),
// (4, 'Serbian')]

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
// (91, 'English'),
// (45, 'French'),
// (25, 'Arabic')
// ]