console.log(countries);
alert('Open the console and check if the countries has been loaded');

//Exercises: Level 1
//1.Create an empty object called dog
    const dog = {};

//2.Print the the dog object on the console
    console.log(dog);

//3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
    dog.name = "Tina";
    dog.legs = 4;
    dog.color = 'white';
    dog.age = 12;
    dog.bark = function() {
        return "woof woof";
    }
    console.log(dog);
    console.log(dog.bark());

//4.Get name, legs, color, age and bark value from the dog object

    console.log(`My dog's name is ${dog.name}`);
    console.log(`It has ${dog.legs} legs`);
    console.log(`It is ${dog.color} color`);
    console.log(`It is ${dog.age} years old`);
    console.log(`and it can say "${dog.bark()}"`);

//5.Set new properties the dog object: breed, getDogInfo
    dog.breed = 'Chappy';
    dog.getDogInfo = function() {
        console.log(`My dog's name is ${dog.name}`);
        console.log(`It has ${dog.legs} legs`);
        console.log(`It is ${dog.color} color`);
        console.log(`It is ${dog.age} years old`);
        console.log(`and it can say "${dog.bark()}"`);
    }

    dog.getDogInfo();

//Exercises: Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
//1.Find the person who has many skills in the users object.
    // const keys = Object.keys(users);

    // let mostSkillsPerson = '';
    // let numberOfSkills = '';

    // keys.forEach(name => {
    //     if (users[name].skills.length > numberOfSkills) {
    //         mostSkillsPerson = name;
    //         numberOfSkills = users[name].skills.length;
    //     }
    // });
    // console.log(`Most of Skills ${numberOfSkills} have ${mostSkillsPerson}`);


    let mostSkillsPerson = '';
    let numberOfSkills = '';

    for (const name in users) {
        if (users[name].skills.length > numberOfSkills) {
            mostSkillsPerson = name;
            numberOfSkills = users[name].skills.length;
        }
    }
    console.log(`Most of Skills ${numberOfSkills} have ${mostSkillsPerson}`);

    

//2.Count logged in users,count users having greater than equal to 50 points from the following object.

    const values = Object.values(users);
    console.log(`There are ${values.filter(p => p.isLoggedIn === true).length} logged users`);
    console.log(`There are ${values.filter(p => p.points >= 50).length} users, having more than 50 points`);



//3.Find people who are MERN stack developer from the users object
    // const persons = Object.keys(users);
    // let developerMERN = [];

    // persons.forEach(name => {
    //     let skillsLetters = [];
    //     for (let i=0; i < users[name].skills.length; i++ ) {
    //         skillsLetters.push((users[name].skills[i])[0]);
    //     }
    //     if (skillsLetters.join('').includes('MERN')) {
    //         developerMERN.push(name);
    //     }
    // });
    // console.log(`${developerMERN} are 'MERN developers`);

    let developerMERN = [];
    for ( const name in users) {
        let skillsLetters = [];
        for (let i=0; i < users[name].skills.length; i++ ) {
            skillsLetters.push((users[name].skills[i])[0]);
        }
        if (skillsLetters.join('').includes('MERN')) {
            developerMERN.push(name);
        }
    }
    console.log(`${developerMERN} are 'MERN developers`);

//4.Set your name in the users object without modifying the original users object
    const copyUsers = Object.assign({}, users);
    copyUsers.Rita = {
        email: 'rita@rita.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 45,
        isLoggedIn: true,
        points: 50
      };
    console.log(users);
    console.log(copyUsers);


//10.Get all keys or properties of users object
    const allKeys = Object.keys(users);
    console.log(`Get all keys of Object: ${allKeys}`); //Get all keys of Object: Alex,Asab,Brook,Daniel,John,Thomas,Paul
    console.log(allKeys); //["Alex", "Asab", "Brook", "Daniel", "John", "Thomas", "Paul"]

//11. Get all the values of users object
    const allValues = Object.values(users);
    console.log(allValues);

//12.Use the countries object to print a country name, capital, populations and languages.
    console.log(`Countries`);
    console.log(`Name \t capital \t populations \t languages`);
    countries.forEach(country => {
        console.log(`${country.name}\t${country.capital}\t${country.population}\t${country.languages}`);
    });

//Exercises: Level 3

//1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
    const personAccount = {
        firstName: 'Rita',
        lastName: 'Jarmalaviciene',
        incomes: {
            salary: 2000,
            bonus: 1000
        },
        expenses: {
            food: 300,
            car: 200,
            sport: 100
        },
        totalIncome: function() {
            return this.addIncome();
        },
        totalExpense: function() {
            return this.addExpense();
        },
        accountInfo: function() {
            return this.firstName + ' ' + this.lastName;
        },
        addIncome: function() {
            return this.incomes.salary + this.incomes.bonus;
        },
        addExpense: function() {
            return this.expenses.food + this.expenses.car + this.expenses.sport;
        },
        accountBalance: function() {
            return this.totalIncome() - this.totalExpense();
        }
    }

    console.log(`Account information`, personAccount.accountInfo());
    console.log(`Account Balance:`, personAccount.accountBalance());
    console.log(`Total incomes ${personAccount.totalIncome()}`);
    console.log(`Total expenses`, personAccount.totalExpense());
    console.log(`FirstName`, personAccount.firstName);
    console.log(`Food expenses ${personAccount.expenses.food}`);

//2, 3 and 4 are based on the following two arrays:users and products ()
    const users2 = [
        {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'08/01/2020 9:00 AM',
            isLoggedIn: false
        },
        {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'08/01/2020 9:30 AM',
            isLoggedIn: true
        },
        {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'08/01/2020 9:45 AM',
            isLoggedIn: true
        },
        {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'08/01/2020 9:50 AM',
            isLoggedIn: false
        },
        {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'08/01/2020 10:00 AM',
            isLoggedIn: false
        }
        ];
    const products = [
        {
            _id: 'eedfcf',
            name: 'mobile phone',
            description: 'Huawei Honor',
            price: 200,
            ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
            ],
            likes: []
        },
        {
            _id: 'aegfal',
            name: 'Laptop',
            description: 'MacPro: System Darwin',
            price: 2500,
            ratings: [],
            likes: ['fg12cy']
        },
        {
            _id: 'hedfcg',
            name: 'TV',
            description: 'Smart TV:Procaster',
            price: 400,
            ratings: [{ userId: 'fg12cy', rate: 5 }],
            likes: ['fg12cy']
        }
        ]
    // Imagine you are getting the above users collection from a MongoDB database. 
    
    //a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account. 
        function signUp(user) {
            let count = 0;
            users2.forEach(element => {
                if (user.email === element.email) {
                    count++;
                }
            });
            if (count === 0) {
                users2[users2.length] = user;
            }
        }
        
        let user = {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'08/01/2020 10:00 AM',
            isLoggedIn: false
        }

        let user2 = {
            _id: 'ahderc',
            username: 'Rita',
            email: 'rita@rita.com',
            password: '222222',
            createdAt:'15/01/2020 10:00 AM',
            isLoggedIn: true
        }
        signUp(user);
        console.log(users2);
        signUp(user2);
        console.log(`User was added:`, users2);

    //b. Create a function called signIn which allows user to sign in to the application
        function signIn(email) {
            let count = 0;
            users2.forEach(element => {
                if (email === element.email) {
                    count++;
                } 
            });
            return count !== 0 ?
                `You are logged in: with email: ${email}` :
                `You dont't have account yet. Please SingUp`;
        }

        console.log(signIn('thomas@thomas.com'));
        console.log(signIn('rita@rita.com'));
        console.log(signIn('rasa@rasa.com'));

//3. The products array has three elements and each of them has six properties. 
//a. Create a function called rateProduct which rates the product 
        function rateProduct(product, userID, rates) {
            products.forEach(element => {
                if (element.name === product) {
                    element.ratings.push({ userId: userID, rate: rates })
                }
            });
        }

        rateProduct('Laptop', 'ghderc', 10);
        rateProduct('Laptop', 'zwf8md', 4);
        console.log(products);

//b. Create a function called averageRating which calculate the average rating of a product
    function averageRating(product) {
        let rateAverage = 0;
        products.forEach(element => {
            if (element.name === product) {
                let sum = 0;                
                for (let i = 0; i < element.ratings.length; i++) {
                    sum += element.ratings[i].rate; 
                }
                rateAverage = sum/element.ratings.length;
            }            
        });

        return rateAverage;
    }

    console.log(`Laptop average rate is: `, averageRating('Laptop'));
    console.log(`mobile phone average rate is: `, averageRating('mobile phone'));
    console.log(`TV average rate is: `, averageRating('TV'));

//4.Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
    function likeProduct(product, userId) {
        products.forEach(element => {
            if (element.name === product) {                          
                element.likes.length !== 0 ?
                    element.likes.shift() :                 
                    element.likes.push(userId);
            }            
        });

        return products;
    }

    likeProduct('Laptop', 'ghderc');
    likeProduct('mobile phone', 'ghderc');
    likeProduct('TV', 'ghderc');
    likeProduct('Laptop', 'rita');
    likeProduct('Laptop', 'rita');
    console.log(products);

//13.Find the 10 most spoken languages:

// Your output should look like this
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

// Your output should look like this
//console.log(mostSpokenLanguages(countries, 3))
// [
// (91, 'English'),
// (45, 'French'),
// (25, 'Arabic')
// ]

//14.Use countries_data.js file create a function which create the ten most populated countries

//console.log(mostPopulatedCountries(countries, 10))

// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]

//15.Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range()) // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) 
//# [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
//console.log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]