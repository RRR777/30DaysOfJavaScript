//console.log(countries);
alert('Open the console and check if the countries has been loaded');

// Exercises
const countriesAPI = 'https://restcountries.eu/rest/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
// Exercises: Level 1
//1.  Read the countries API using fetch and print the name of country, capital, languages, population and area.
    fetch(countriesAPI)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                let languages = [];
                element.languages.forEach(language => {
                    languages.push(language.name);                    
                });
                console.log(`Country: ${element.name} - Capital: ${element.capital} - Languages: ${languages} - Population: ${element.population} - Area: ${element.area}`);
            });
        })
        .catch(error => console.log(error));
// Exercises: Level 2
//1.  Print out all the cat names in to catNames variable.
    fetch(catsAPI)
        .then(response => response.json())
        .then(data => {
            let catNames = [];
            data.forEach(cat => {                
                catNames.push(cat.name);                    
            });
            console.log(catNames);
        })
        .catch(error => console.log(error));
// Exercises: Level 3
//1. Read the cats api and find the average weight of cat in metric unit.
    fetch(catsAPI)
        .then(response => response.json())
        .then(data => {
            data.forEach(cat => {                
                const weight = cat.weight.metric.match(/\d/g);
                const average = weight.reduce((sum, number) => +sum + +number) / weight.length;
                console.log(`Cat's with name: ${cat.name} average weight is ${average}`);  
            });
        })
        .catch(error => console.log(error));

//2. Read the countries api and find out the 10 largest countries
    fetch(countriesAPI)
        .then(response => response.json())
        .then(data => {
            data.sort(function(a, b) {
                if (a.area < b.area) return 1;
                if (a.area > b.area) return -1;
                return 0;
            })

            for (let i=0; i < 10; i++ ) {
                console.log(`Country: ${data[i].name} - Area: ${data[i].area}`);
            }           
        })
        .catch(error => console.log(error));

//3. Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        let languages = [];
        data.forEach(country => {
            country.languages.forEach(language => {
                languages.push(language.name);                    
            });
        });
        const languagesSet = new Set(languages);
        console.log(`Total number of languages in the world used as officials: ${languagesSet.size}`);  
    })
    .catch(error => console.log(error));