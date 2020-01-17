console.log(countries);
alert('Open the console and check if the countries has been loaded');

// Exercises:Level 1
//1. Display the countries array as a table
    const countriesLess = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];

    console.table(countriesLess);

//2. Display the countries object as a table
    console.table(countries);

//3. Use console.group() to group logs
    console.group('countries');
    console.table(countriesLess);
    console.groupEnd();

// Exercises:Level 2
//1. 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, '2*10 not more than 10.');

//2. Write a warning message using console.warn()
    console.warn('Please check your server setings');

//3. Write an error message using console.error()
    console.error('This data can\'t be accessed');

// Exercises:Level 3
//1 Check the speed difference among the following loops: while, for, for of, forEach
    console.time('While Loop');
    let i = 0;
    while (i < countries.length) {
        console.log(countries[i].name);
        countries[i].name = countries[i].name.toUpperCase();
        i++;
    }
    console.timeEnd('While Loop');

    console.time('For Loop');    
    for (let i = 0; i < countries.length; i++) {
        console.log(countries[i].name);
        countries[i].name = countries[i].name.toLowerCase();
    }
    console.timeEnd('For Loop');

    console.time('For of Loop');    
    for (const country of countries ) {
        console.log(country.name);
        country.name = country.name.toUpperCase();
    }
    console.timeEnd('For of Loop');

    console.time('Foreach Loop');    
    countries.forEach(country => {
        console.log(country.name);
        country.name = country.name.toUpperCase();
    });
    console.timeEnd('Foreach Loop');

    // Console.log(object)
    // While Loop: 36.10498046875ms
    // For Loop: 44.94677734375ms
    // For of Loop: 46.65283203125ms
    // Foreach Loop: 49.828857421875ms

    // Only Convert to upper or lower case, not print on console:
    // While Loop: 0.188720703125ms
    // For Loop: 0.10986328125ms
    // For of Loop: 0.150146484375ms
    // Foreach Loop: 0.18212890625ms