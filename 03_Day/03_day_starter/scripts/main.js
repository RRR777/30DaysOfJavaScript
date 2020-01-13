// this is your main.js script
//1. Exercises: Level 1 
    //1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it
    let firstName = "Rita",
        lastName = "Last name",
        country = "Lithuania",
        city = "Kaunas",
        age = 45,
        isMarried = true,
        year = 1975;

    //The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.

    console.log(typeof(firstName));
    console.log(typeof(lastName));
    console.log(typeof(country));
    console.log(typeof(city));
    console.log(typeof(age));
    console.log(typeof(isMarried));
    console.log(typeof(year));

    //2.Check if type of '10' is equal to 10
    console.log(typeof('10') === typeof(10));
    console.log(typeof('10') == typeof(10));

    //3.Check if parseInt('9.8') is equal to 10
    console.log(parseInt('9.8') === 10);
    console.log(parseInt('9.8') == 10);

//4. Boolean value is either true or false.
    //1.Write three JavaScript statement which provide truthy value.
    let isValid = true;
    console.log(isValid ? true : false);
    console.log('string' ? true : false);
    console.log(-5 ? true : false);

    //2. Write three JavaScript statement which provide falsy value.
    let test;
    console.log(!isValid ? true : false);
    console.log('' ? true : false);
    console.log(0 ? true : false);
    console.log(test ? true : false);

//5. Exercises: Comparison Operators
    //Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    
    // 4 > 3    //true
    // 4 >= 3   //true
    // 4 < 3    //false
    // 4 <= 3   //false
    // 4 == 4   //true
    // 4 === 4  //true
    // 4 != 4   //false
    // 4 !== 4  //false
    // 4 != '4' //false
    // 4 == '4' //true
    // 4 === '4' //false
    //Find the length of python and jargon and make a falsy comparison statement.
    console.log(4 > 3);
    console.log(4 >= 3);
    console.log(4 < 3);
    console.log(4 <= 3);
    console.log(4 == 4);
    console.log(4 === 4);
    console.log(4 != 4);
    console.log(4 !== 4);
    console.log(4 != '4');
    console.log(4 == '4');
    console.log(4 === '4');
    let string1 = 'python';
    let string2 = 'jargon';
    console.log(string1.length === string2.length);
//6. Exercises: Logical Operators
    console.log('Exercises: Logical Operators');
    //Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
    // 4 > 3 && 10 < 12     //true
    // 4 > 3 && 10 > 12     //false
    // 4 > 3 || 10 < 12     //true
    // 4 > 3 || 10 > 12     //true
    // !(4 > 3)             //false
    // !(4 < 3)             //true
    // !(false)             //true
    // !(4 > 3 && 10 < 12)  //false
    // !(4 > 3 && 10 > 12)  //true
    // !(4 === '4')         //true
    console.log(4 > 3 && 10 < 12);
    console.log(4 > 3 && 10 > 12);
    console.log(4 > 3 || 10 < 12);
    console.log(4 > 3 || 10 > 12);
    console.log(!(4 > 3));
    console.log(!(4 < 3));
    console.log(!(false));
    console.log(!(4 > 3 && 10 < 12));
    console.log(!(4 > 3 && 10 > 12));
    console.log(!(4 === '4'));
    // 2.There is no 'on' in both dragon and python
    let str3 = 'dragon';
    let str4 = 'python';
    console.log(!str3.includes('on') && !str4.includes('on'));

//7. Exercises: Date time Object
        //1. What is the year today?
        let date = new Date();
        let thisYear = date.getFullYear();
        console.log(thisYear);
        //2.What is the month today as a number?
        let thisMonth = date.getMonth()+1; //months 0-11 , 0 - is January    
        console.log(thisMonth);     
        //3. What is the date today?
        console.log(date);
        //4. What is the day today as a number?
        let thisDay = date.getDate();
        console.log(date.getDay());  //1 Monday
        console.log(thisDay); //day 1-31
        //5.What is the hours now?
        let thisHour = date.getHours();
        console.log(thisHour);
        //6.What is the minutes now?
        let thisMinute = date.getMinutes();
        console.log(thisMinute);
        //7.Find out the numbers of seconds elapsed from January 1, 1970 to now.
        let thisSeconds = date.getSeconds();
        console.log(thisSeconds);
        console.log(date.getTime() / 1000);
        console.log(Math.floor(Date.now() / 1000));
//.Exercises: Level 2
    console.log('Exercises: Level 2');
    //1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
    //let base = prompt('Enter base');
    //let height = prompt('Enter height');
    //let area = 0.5 * base * height;
    //console.log(base, height);
    // console.log(`Enter base: ${base}`);
    // console.log(`Enter base: ${height}`);
    // console.log(`The area of the triangle is  ${area}`);

    //2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
    // Enter side a: 5
    // Enter side b: 4
    // Enter side c: 3
    // The perimeter of the triangle is 12
    // let sideA = prompt('Enter side a');
    // let sideB = prompt('Enter side b');
    // let sideC = prompt('Enter side c');
    // let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);

    // console.log(`Enter base: ${sideA}`);
    // console.log(`Enter base: ${sideB}`);
    // console.log(`Enter base: ${sideC}`);
    // console.log(`The perimeter of the triangle is : ${perimeter}`);

    //3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
    let length = prompt('Enter length');
    let width = prompt('Enter width');
    let rectangleArea = length * width;
    let rectanglePerimeter = 2 * (parseInt(length) + parseInt(width));

    console.log(`Enter length: ${length}`);
    console.log(`Enter width: ${width}`);
    console.log(`Rectangle area: ${rectangleArea}`);
    console.log(`Rectangle perimeter: ${rectanglePerimeter}`);

    //4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
    let radius = prompt('Enter radius');
    const PI = 3.14;
    let circleArea = PI * radius * radius;

    console.log(`Enter radius: ${radius}`);
    console.log(`Circle area is : ${circleArea}`);

    //5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
    let x = prompt('Enter x');
    let y = 2*x-2;

    console.log(`Enter x: ${x}`);
    console.log(`y=2x-2 y=: ${y}`);

    //6.Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
    let x1 = 2, y1 = 2, x2 = 6, y2 = 10;
    let m= (y2-y1)/(x2-x1);
    console.log(`The slope between point (${x1}, ${y1}) and point (${x2}, ${y2}) is ${m}`);

    //7.Compare the slope of above two questions.

    //8.Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

    //9.Writ a script that prompt a user to enters hours and rate per hour. Calculate pay of the person?
    // Enter hours: 40
    // Enter rate per hour: 28
    // Your weekly earning is 1120
    let hours = prompt('Enter hours');
    let rate = prompt('Enter rate per hour');
    let earning = hours * rate;

    console.log(`Enter hours: ${hours}`);
    console.log(`Enter rate per hour: ${rate}`);
    console.log(`Your weekly earning is : ${earning}`);


    //10.If the length of your name is greater than 7 say, your name is long else say your name is short.
    console.log(firstName.length > 7 ? 'Your name is long' : 'Your name is short');

    //11.Compare your first name length and your family name length and you should get this output.
    let firstName2 = 'Asabeneh'
    let lastName2 = 'Yetayeh'
    //Output
    //Your first name, Asabeneh is longer than your family name, Yetayeh
    console.log(firstName2.length > lastName2.length ? 
        `Your first name, ${firstName2} is longer than your family name, ${lastName2}` : 
        `Your first name, ${firstName2} is shorter than your family name, ${lastName2}`);

    //12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge. Output:
    let myAge = 250;
    let yourAge = 300;
    console.log(myAge > yourAge ? 
        `I am, ${myAge - yourAge} years older than you.` : 
        `You are, ${yourAge - myAge} years older than I.`);

    //13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
    let birthYear = prompt('Enter born year');
    let age2 = 2020-birthYear;
    console.log(`Born year: ${birthYear}`);
    console.log(age2 > 18 ?
        `You are ${age2}. You are old enough to drive` :
        `You are ${age2}. You will be allowed to drive after ${18-age2} years.`);

    //14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
        let years = prompt('Enter years');
        let seconds = years * 365 * 24 * 60 * 60;
    
        console.log(`Enter number of yours you live: ${years}`);
        console.log(`You lived  ${seconds} seconds.`);

    //15.Create a human readable time format
            // YYYY-MM-DD HH:mm:ss
            // DD-MM-YYYY HH:mm:ss
            // DD/MM/YYYY HH:mm:ss
            if (thisDay < 10) { 
                thisDay = "0" + thisDay; 
            } 
            if (thisMonth < 10) { 
                thisMonth = "0" + thisMonth; 
            } 
            if (thisHour < 10) { 
                thisHour = "0" + thisHour; 
            } 
            if (thisMinute < 10) { 
                thisMinute = "0" + thisMinute; 
            } 
            if (thisSeconds < 10) { 
                thisSeconds = "0" + thisSeconds; 
            } 

        console.log(date.toLocaleString()); // YYYY-MM-DD HH:mm:ss
        console.log(date.toDateString());   //Mon Jan 06 2020
        console.log(date.toLocaleDateString()); //2020-01-06
        console.log(`${thisYear}-${thisMonth}-${thisDay} ${thisHour}:${thisMinute}:${thisSeconds}`);
        console.log(`${thisDay}-${thisMonth}-${thisYear} ${thisHour}:${thisMinute}:${thisSeconds}`);
        console.log(`${thisDay}/${thisMonth}/${thisYear} ${thisHour}:${thisMinute}:${thisSeconds}`);

        // console.log('Format date using momento.js library');
        // //https://momentjs.com/
        // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
        // console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
        // console.log(moment().format('DD-MM-YYYY HH:mm:ss'));
        // console.log(moment().format('DD/MM/YYYY HH:mm:ss'));
        // console.log(moment().format('dddd'));
        // console.log(moment().format('MMM Do YY'));
        // console.log(moment().format('DD/MM/YYYY'));

    
    //Exercises: Level 3
        //1.Create a human readable time format using the Date time object. The hour and the minute should be all time two digits(7 hours should be 07 and 5 minutes should be 05 )
        //YYY-MM-DD HH:mm eg. 20120-01-02 07:05
        let dateHumanReadable = new Date('2020-01-02 07:05');

        let yearMy = dateHumanReadable.getFullYear() // return year
        let monthMy = dateHumanReadable.getMonth() + 1 // return month(0 - 11)
        let dateMy = dateHumanReadable.getDate() // return date (1 - 31)
        let hoursMy = dateHumanReadable.getHours() // return number (0 - 23)
        let minutesMy = dateHumanReadable.getMinutes() // return number (0 -59)     

        if (dateMy < 10) { 
            dateMy = "0" + dateMy; 
        } 
        if (monthMy < 10) { 
            monthMy = "0" + monthMy; 
        } 
        if (hoursMy < 10) { 
            hoursMy = "0" + hoursMy; 
        } 
        if (minutesMy < 10) { 
            minutesMy = "0" + minutesMy; 
        } 

        console.log(dateHumanReadable);
        console.log(`${yearMy}-${monthMy}-${dateMy} ${hoursMy}:${minutesMy}`) // 2020-01-02 07:05