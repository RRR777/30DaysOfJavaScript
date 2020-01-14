console.log(countries);
alert('Open the console and check if the countries has been loaded');

//1.Declare a function fullName and it print out your full name.
    function fullName() {
        let firstName = 'Rita';
        let lastName = 'Jarmalaviciene';

        console.log(`${firstName} ${lastName}`);
    }
    fullName();

//2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

    function fullNameWithParameters(firstName, lastName) {
    return `${firstName} ${lastName}`;
    }
    console.log(fullNameWithParameters('Rita', 'Jarmalaviciene'));

//3.Declare a function addNumbers and it takes two two parameters and it returns sum.

    function addNumbers(num1, num2) {
        return num1 + num2;
    }
    console.log(addNumbers(2, 5));

//4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

    // function areaOfRectangle(length, width) {
    //     return length * width;
    // }

    const areaOfRectangle = (length, width) => length * width;
    console.log(areaOfRectangle(5, 6));

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

    // function perimeterOfRectangle(length, width) {
    //     return (length + width) * 2;
    // }

    const perimeterOfRectangle = (length, width) => (length + width) * 2;
    console.log(perimeterOfRectangle(5, 6));

//6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

    // function volumeOfRectPrism(length, width, height) {
    //     return length * width * height;
    // }

    const volumeOfRectPrism = (length, width, height) => length * width * height;
    console.log(volumeOfRectPrism(5, 6, 3));

//7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

    // function areaOfCircle(r, π = 3.14) {
    //     return π * r * r;
    // }

    const areaOfCircle = (r) => Math.PI * r * r;
    console.log(`Areao of circle: `, areaOfCircle(5).toFixed(2));

//8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

    // function circumOfCircle(r, π = 3.14) {
    //     return 2 * π * r;
    // }

    const circumOfCircle = (r, π = 3.14) => 2 * π * r;
    console.log(circumOfCircle(5).toFixed(2));

//9.Density(tankis) of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

    // function density(mass, volume) {
    //     return mass/volume;
    // }

    const density = (mass, volume) => mass/volume;
    console.log(density(20.5, 6).toFixed(2));

//10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
    // function speed(distance, time) {
    //     return distance/time;
    // }

    const speed = (distance, time) => distance/time;
    console.log(`${speed(120, 2).toFixed(2)} km/h`);

//11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
    // function weight(mass, gravity) {
    //     return mass * gravity;
    // }

    const weight = (mass, gravity = 9.8) => mass * gravity;
    console.log(`The weight is: ${weight(120).toFixed(2)}`);

//12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

    // function convertCelciusToFahrenheit(oC) {
    //     return (oC * 9/5) + 32;
    // }

    const convertCelciusToFahrenheit = (oC) => (oC * 9/5) + 32;
    let oC = 23;
    console.log(`The ${oC} oC is oF: ${convertCelciusToFahrenheit(oC).toFixed(2)} oF`);

//13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

    // The same groups apply to both men and women.
    // Underweight: BMI is less than 18.5
    // Normal weight: BMI is 18.5 to 24.9
    // Overweight: BMI is 25 to 29.9
    // Obese: BMI is 30 or more

    // function bmiCalculation(weight, hight) {
    //     let bmi = weight / (hight * hight);
    //     if ( bmi < 18.5 ) { 
    //         return bmi.toFixed(2) + ' Underweight';
    //     } else if ( bmi < 24.9 ) { 
    //         return bmi.toFixed(2) + ' Normal weight';
    //     } else if ( bmi < 29.9 ) { 
    //         return bmi.toFixed(2) + ' Overweight';
    //     } else if ( bmi > 30 ) { 
    //         return bmi.toFixed(2) + ' Obese';
    //     } else {
    //         return 'You entered wrong data';
    //     }
    // }

    const bmiCalculation = (weight, hight) => {
        let bmi = weight / (hight * hight);
        if ( bmi < 18.5 ) { 
            return bmi.toFixed(2) + ' Underweight';
        } else if ( bmi < 24.9 ) { 
            return bmi.toFixed(2) + ' Normal weight';
        } else if ( bmi < 29.9 ) { 
            return bmi.toFixed(2) + ' Overweight';
        } else if ( bmi > 30 ) { 
            return bmi.toFixed(2) + ' Obese';
        } else {
            return 'You entered wrong data';
        }
    }
    let weight2 = prompt('Enter your weight in kg');
    let hight = prompt('Enter your height in m');
    console.log(`Your Weight is ${weight2} kg. Your height is ${hight} m. Your BMI index is: ${bmiCalculation(weight2, hight)}`);

//14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

    const checkSeason = (month) => {
        let season;
        switch (month) {
            case 'december':                  
            case 'january':
            case 'february':
                season =  'Winter';
                break;
            case 'march':
            case 'april':
            case 'may':
                season =  'Spring';
                break;
            case 'june':
            case 'july':
            case 'august':
                season =  'Summer';
                break;
            case 'september':
            case 'octorber':
            case 'november': 
                season =  'Autumn';
                break;  
            default:
                console.log('You entered wrong month');
        }
        return season;
    }
    let month = prompt('Enter month name').toLowerCase();
    checkSeason(month) ? 
        console.log(`The ${month} is : in ${checkSeason(month)} season`):
        console.log(`You entered wrong month: ${month}`);

//15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

    // console.log(findMax(0, 10, 5))
    // 10
    // console.log(findMax(0, -10, -2))
    // 0

    const findMax = (arg1, arg2, arg3) => Math.max(arg1, arg2, arg3);
    console.log(`Maximum is: ${findMax(0, 10, 5)}`);
    console.log(`Maximum is: ${findMax(0, -10, -2)}`);

//Exercises: Level 2
//1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


//2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
    // console.log(solveQuadratic()) // {0}
    // console.log(solveQuadratic(1, 4, 4)) // {-2}
    // console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    // console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    // console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    // console.log(solveQuadratic(1, -1, 0)) //{1, 0}

    const solveQuadratic = ( a = 0, b = 0, c = 0 ) => {
        let result = [];
        let discriminant = (b*b) - (4*a*c);

        if ( discriminant > 0 && a !== 0 ) {
            result[0] = (-b + Math.sqrt(discriminant))/ 2*a;
            result[1] = (-b - Math.sqrt(discriminant))/ 2*a;
        } else if ( discriminant === 0 && a !== 0 ) {
            result[0] = -b / (2*a);
        } else if ( a === 0 && b !== 0 ) {
            result[0] = -c / b;
        } else if ( a === 0 && b === 0 ) {
            result[0] = 0;
        } else {
            result[0] = 'no result';
        }
        return result;
    }

    console.log(solveQuadratic()); // {0}
    console.log(solveQuadratic(1, 4, 4)); // {-2}
    console.log(solveQuadratic(1, -1, -2)); // {2, -1}
    console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)); //{2, -2}
    console.log(solveQuadratic(1, -1, 0)); //{1, 0}


//3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

    const printArray = (arr) => {
        arr.forEach(element => {
            console.log(element);
        });
    }
    printArray(countries);

//4.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
    // showDateTime()
    // 08/01/2020 04:08

    function showDateTime() {
        let date = new Date();
        let year = date.getFullYear() // return year
        let month = date.getMonth() + 1 // return month(0 - 11)
        let day = date.getDate() // return date (1 - 31)
        let hours = date.getHours() // return number (0 - 23)
        let minutes = date.getMinutes() // return number (0 -59) 
        let formatedDate;    

        if (day < 10) { 
            day = "0" + day; 
        } 
        if (month < 10) { 
            month = "0" + month; 
        } 
        if (hours < 10) { 
            hours = "0" + hours; 
        } 
        if (minutes < 10) { 
            minutes = "0" + minutes; 
        } 
        formatedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
        return formatedDate;
    }

    console.log(`Formated date `, showDateTime());

//5.Declare a function name swapValues. This function swaps value of x to y.

    // swapValues(3, 4) // x => 4, y=>3
    // swapValues(4, 5) // x = 5, y = 4
    const swapValues = (x, y) => {
        console.log(`x => ${y}, y=>${x}`);
    }
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4

//6.Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

    // console.log(reverseArray([1, 2, 3, 4, 5]))
    // //[5, 4, 3, 2, 1]
    // console.log(reverseArray(['A', 'B', 'C']))
    // //['C', 'B', 'A']

    const reverseArray = (arr) => {
        let reverce = [];
        for ( let i=arr.length-1; i >= 0; i-- ) {
            reverce.push(arr[i]);
        }

        return reverce;
    };

    console.log(reverseArray([1, 2, 3, 4, 5]));
    console.log(reverseArray(['A', 'B', 'C']));

//7.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
    const capitalizeArray = (array) => {
        let capitalizeArray = [];
        array.forEach(element => {
            capitalizeArray.push(element.toUpperCase());
        });
        return capitalizeArray;
    };

    console.log(capitalizeArray(countries));

//8.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

    // const addItem = (item) => {
    //     let sum = 0;
    //     item.forEach(element => {
    //         sum += element;
    //     });

    //     return sum;
    // };

    // console.log(addItem([1, 2, 3, 4, 5]));
    
    const addItem = (arr, item) => {
        arr.push(item);
          return arr;
    };

    console.log(`Function added array element `, addItem([1, 2, 3, 4, 5], 9));

//9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
    const removeItem = (arr, index) => {
        arr.splice(index, 1);
        return arr;
    };

    let numb = [1, 2, 3, 4, 5];
    console.log(`Function remove array element `, removeItem(numb, 2));

//10.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
    const sumOfNumbers = (...args) => {
        let sum = 0;
        args.forEach(element => {
            sum += element;
        });
        return sum;
    };

    console.log(`Function sum Numbers `, sumOfNumbers(2, 7, 6, 8, 3));

//11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
    const sumOfOdds = (...args) => {
        let sum = 0;
        args.forEach(element => {
            if (element % 2 !== 0) {
                sum += element;
            }            
        });
        return sum;
    };

    console.log(`Function sum Odd Numbers `, sumOfOdds(2, 7, 6, 8, 3));

//12.Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
    const sumOfEven = (...args) => {
        let sum = 0;
        args.forEach(element => {
            if (element % 2 === 0) {
                sum += element;
            }            
        });
        return sum;
    };

    console.log(`Function sum Even Numbers `, sumOfEven(2, 7, 6, 8, 3));

//13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

    // evensAndOdds(100);
    // The number of odds are 50.
    // The number of evens are 51.

    const evensAndOdds = (number) => {
        let even = 0;
        let odd = 0;
        for ( let i = 0; i <= number; i++ ) {
            if ( i % 2 === 0 ) {
                even++;
            } else {
                odd++;
            }
        }
        console.log(`The number of odds are ${odd}.`);
        console.log(`The number of evens  are ${even}.`);
    }
    evensAndOdds(100);

//14. Write a function which takes any number of arguments and return the sum of the arguments

    // sum(1, 2, 3) // -> 6
    // sum(1, 2, 3, 4) // -> 10

    function sum() {
        let result = 0; 
        for ( let i = 0; i < arguments.length; i++ ) {
            result += arguments[i];
        }

        console.log(result);
    }

    sum(1, 2, 3);
    sum(1, 2, 3, 4);

//15. Writ a function which generates a randomUserIp.
    //A valid IP address must be in the form of xxx.xxx.xxx.xxx, where xxx is a number from 0-255
    //cannot be used. 
    // 10.x.x.x cannot be used along with 
    // 192.168.x.x, 
    // 172.16.0.0 to 
    // 172.31.255.255.

    function randomUserIp() {
        let ip = '';
        for ( let i=0; i<3; i++ ) {
            ip += Math.floor(Math.random() * 256);
            ip += '.';
        }
        ip += Math.floor(Math.random() * 256);

        return ip;
    }

    console.log(randomUserIp());

//16.Write a function which generates a randomMacAddress
    //^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$
    //Six groups of two hexadecimal digits separated by hyphens (-), like 01-23-45-67-89-ab

    function randomMacAddress() {
        let mac = "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
            return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
        });

        return mac;
    }
    console.log(randomMacAddress());

//17.Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

    // console.log(randomHexaNumberGenerator());
    // '#ee33df'

    const randomHexaNumberGenerator = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

    console.log(randomHexaNumberGenerator());

//18.Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

    // console.log(userIdGenerator());
    // 41XTDbE

    const userIdGenerator = () => {
        let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
        for ( let i = 0; i < 7; i++ ) {
            id += character.charAt(Math.floor(Math.random() * character.length));
        }

        return id;
    }        

    console.log(userIdGenerator());

//Exercises: Level 3

//34.Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

    // userIdGeneratedByUser()
    // 'kcsy2
    // SMFYb
    // bWmeq
    // ZXOYh
    // 2Rgxf
    // '
    // userIdGeneratedByUser()
    // '1GCSgPLMaBAVQZ26
    // YD7eFwNQKNs7qXaT
    // ycArC5yrRupyG00S
    // UbGxOFI7UXSWAyKN
    // dIV0SSUTgAdKwStr
    // '

    function userIdGeneratedByUser() {
        let numberOfCharacters = prompt('Enter number of characters');
        let numberOfIds = prompt('How many Ids need?');
        let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let ids = [];
        
        for ( let i = 0; i < numberOfIds; i++ ) {
            let id = '';
            for ( let i = 0; i < numberOfCharacters; i++ ) {
                id += character.charAt(Math.floor(Math.random() * character.length));
            }
            ids.push(id);
        }

        return ids;
    }

    console.log(userIdGeneratedByUser());

//2.Write a function name rgbColorGenerator and it generates rgb colors.

    // rgbColorGenerator()
    // rgb(125,244,255)

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

//3.Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
    const arrayOfHexaColors = (n) => {        
        const hexaColors = [];
        const numbers = [];
        for (let i=0; i<n; i++) {
            let hexa = '#';
            for (let i=0; i<3; i++) {
                let rand = Math.floor(Math.random() * 256);
                numbers.push(rand);
                hexa += rand.toString(16);
            }
            hexaColors.push(hexa);
        }

        return hexaColors;
    }

    console.log(`Convert number to hexadecimal color`, arrayOfHexaColors(12));
    //"#c0587", "#f32ef", "#46b6aa", "#3b3862", "#4bd931", "#4f295d", "#a6df65", "#a5d462", "#fa1bf5", "#38b74e", "#7c72d1", "#7c1bff", "#86c4c"]

//4.Write a function arrayOfRgbColors which return any number of RGB colors in an array.
    function rgbColorGenerator(n) {
        const codes = [];
        for (let i=0; i<n; i++) {
            let rgb = 'rgb(';
            for ( let i=0; i<2; i++ ) {
                rgb += Math.floor(Math.random() * 256);
                rgb += ',';
            }
            rgb += Math.floor(Math.random() * 256);
            rgb += ')';
            codes.push(rgb);
        }

        return codes;
    }
    console.log(`RGB codes: `, rgbColorGenerator(9));

//5.Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

    function convertHexaToRgb(hexa) {
            let rgb = 'rgb(';
            for ( let i=1; i<4; i+=2 ) {
                rgb += parseInt(hexa.substr(i,2), 16);
                rgb += ',';
            }
            rgb += parseInt(hexa.substr(5,2), 16);
            rgb += ')';

        return rgb;
    }
    console.log(`Convert hexa color to RGB: `, convertHexaToRgb('#611bf5'));

//6.Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

    const convertRgbToHexa = (rgb) => {        
        let numbers = rgb.match(/\d+/g);

        let hexa = '#';
        for (let i=0; i<3; i++) {
            console.log(numbers[i]);
            console.log(parseInt(numbers[i]));
            hexa += parseInt(numbers[i]).toString(16);
        }

        return hexa;
    }

    console.log(`Convert RGB to hexadecimal color`, convertRgbToHexa('rgb(223, 224, 236)')); //#dfe0ec

//7. Write a function generateColors which can generate any number of hexa or rgb colors.
    // console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    // console.log(generateColors('hexa', 1)) // '#b334ef'
    // console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    // console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    const generateColors = (type, number) => {    
        let result;

        switch (type) {
            case 'hexa':
                result = arrayOfHexaColors(number);
                break;
            case 'rgb':
                result = rgbColorGenerator(number);
                break;
            default:
                result = 'not such color type';
        }
        
        return result;
    }

    console.log(`Convert RGB to hexadecimal color`, generateColors('hexa', 3)); 
    console.log(generateColors('hexa', 1));
    console.log(generateColors('rgb', 3));
    console.log(generateColors('rgb', 1));

//8.Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

    const shuffleArray = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    console.log(shuffleArray([1, 2, 3, 4, 5]));

//9.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
    
    const factorial = (n) => {
        let f = []; 
        if (n == 0 || n == 1) {
            return 1;
        }
        if (f[n] > 0) {
            return f[n];
        }
        return f[n] = factorial(n-1) * n;
    }

    console.log(factorial(8));

// 10.Call your function isEmpty, it takes a parameter and it checks if it is empty or not

    let value;

    function isEmpty(param) {
        return !param ? true : false;
    }

    console.log(isEmpty('string'));
    console.log(isEmpty(''));
    console.log(isEmpty());
    console.log(isEmpty(15));
    console.log(isEmpty(null));
    console.log(isEmpty(value));

// 11.Call your function sum, it takes any number of arguments and it returns the sum.
    const sumNumbers = (...args) => {
        let sum = 0;
        args.forEach(element => {
            sum += element;
        });

        return sum;
    }

    console.log(sumNumbers(4, 6, 7, 3, 8, 2));

// 12.Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
    const numbersInArray = [4, 6, 7, 3, '8', 2];

    const sumOfArrayItems = (numbers) => {
        let sum = 0;
        numbers.forEach(element => {
            if (typeof(element) === 'number') {
                sum += element;
            } else {
                return `Array item ${element} is not number`;
            }
        });

        return sum;
    }

    console.log(sumOfArrayItems(numbersInArray));

// 13.Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
    const numbersInArray2 = [4, 6, 7, '3', 8, 2];

    const average = (numbers) => {
        let sum = 0;
        numbers.forEach(element => {
            if (typeof(element) === 'number') {
                sum += element;
            } else {
                return `Array item ${element} is not number`;
            }
        });

        return sum/numbers.length;
    }

    console.log(average(numbersInArray2));

// 14.Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

    // console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    // // →['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    // console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    // // →['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    // 
    // // →'Not Found'
    const modifyArray = (data) => {
        let sum = 0;
        if (data.length >= 5 ) {
            data[4] = 'Modified';
        } else {
            return `Item not found`;
        }        

        return data;
    }

    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

// 15.Write a function called isPrime, which checks if a number is prime number.
    const isPrime = (num) => {
        for(let i = 2; i < num; i++)
            if(num % i === 0) return false;
        return num > 1;
    }

    console.log(isPrime(11));

// 16.Write a functions which checks if all items are unique in the array.
    const isUnique = (arr) => {
        return (new Set(arr)).size === arr.length;
    }

    console.log(isUnique(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
    console.log(isUnique(['Avocado', 'Tomato', 'Avocado','Mango', 'Avocado','Carrot']));

// 17.Write a function which checks if all the items of the array are the same data type.
    const allSameType = (arr) => {
        return new Set( arr.map( x => typeof x ) ).size <= 1;
    }

    console.log(allSameType(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
    console.log(allSameType(['Avocado', 'Tomato', 'Avocado','Mango', 11,'Carrot']));
    console.log(allSameType(['Avocado', 'Tomato', 'Avocado','Mango', true,'Carrot']));

// 18.JavaScript variable name does not support special characters or symbols except $ or _. Write a function *isValidVariable which check if a variable is valid or invalid variable.
    const isValidVariable = (variable) => {
        return (variable.match(/[a-zA-Z_$][0-9a-zA-Z_$]*/g)[0] === variable) 
            ? true 
            : false;
    }
    console.log(`may variable name is 'myVariable%' `, isValidVariable('myVariable%'));
    console.log(`may variable name is 'myVariable' `, isValidVariable('myVariable'));
    console.log(`may variable name is '$myVariable' `, isValidVariable('$myVariable'));
    console.log(`may variable name is '_myVariable' `, isValidVariable('_myVariable'));
    console.log(`may variable name is '2myVariable' `, isValidVariable('2myVariable'));
    console.log(`may variable name is 'myVariable2' `, isValidVariable('myVariable2'));


// 19.Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
    //sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)]
    const sevenRandomNumbers = () => {
        let numbers = [];
        do {
            number = getRandomArbitrary(0, 9);
            if (!numbers.includes(number)) {
                numbers.push(number);
            }            
        } while (numbers.length < 7);

        return numbers;
    }

    const getRandomArbitrary = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    console.log(sevenRandomNumbers());
    
// 20.Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
    
    const reverseCountries = (countries) => {
        let arr = countries.slice();
        return arr.reverse();
    }

    console.log(reverseCountries(countries));