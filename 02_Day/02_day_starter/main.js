// this is your main.js script

        // 1. Declare a variable name challenge and assign it to an initial value '30 Days Of JavaScript'.
        let challenge  = '30 Days Of JavaScript';

        // 2. Print the string on the browser console using console.log()
        console.log(challenge);

        // 3. Print the length of the string on the browser console using console.log()
        console.log(challenge.length);

        // 4. Change all the string to capital letters using toUpperCase() method
        console.log(challenge.toUpperCase());

        // 5. Change all the string to lowercase letters using toLowerCase() method
        console.log(challenge.toLowerCase());

        // 6. Cut(slice) out the first word of the string using substr() or substring() method
        console.log(challenge.substr(3, 4));
        console.log(challenge.substring(3, 7));

        // 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
        console.log(challenge.substr(3));

        // 8. Check if the string contains a word Script 
        console.log(sentence.includes('Script'));
        console.log(challenge.includes('Script'));

        // 9. Split the string into array using split() method
        console.log(challenge.split(' ')); //split to seperate word
        console.log(challenge.split('')); //split to seperate symbol

        // 10. Split the string 30 Days Of JavaScript at the space using split() method
        console.log(challenge.split(' '));

        // 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
        let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
        console.log(companies.split(', '));

        // 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
        let newChallange = 'Python';
        console.log(challenge.replace('JavaScript', newChallange));

        // 13. What is character at index 15 in '30 Days Of JavaScript' string use charAt() method.
        console.log(challenge.charAt(15));

        // 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
        console.log(challenge.charCodeAt('J'));

        // 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
        console.log(challenge.indexOf('a'));

        // 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
        console.log(challenge.lastIndexOf('a'));

        // 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
        let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
        console.log(sentence2.indexOf('because'));

        // 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
        console.log(sentence2.lastIndexOf('because'));

        // 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
        console.log(sentence2.search('because'));

        // 20. Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
        let sentence3 = ' 30 Days Of JavaScript ';
        console.log(sentence3.trim());

        // 21. Use startsWith() method with the string 30 Days Of JavaScript make the result true
        sentence3 = sentence3.trim();
        console.log(sentence3.startsWith(30));

        // 22. Use endsWith() method with the string 30 Days Of JavaScript make the result true
        console.log(sentence3.endsWith('JavaScript'));

        // 23. Use match() method to find all the a’s in 30 Days Of JavaScript
        console.log(sentence3.match(/a/g));

        // 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
        let str1 =  '30 Days of';
        let str2 = 'JavaScript';
        console.log(str1.concat(' ', str2));

        //25. Use repeat() method to print 30 Days Of JavaScript 2 times
        console.log(challenge.repeat(2));

        //Exercise: Level 2

        // 1. Using console.log() print out the following statement.
        console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help to one another.");

        // 2. Using console.log() print out the following quote by Mother Teresa.
        console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

        //3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
            console.log(`Is type of '10' Equal type of 10? `, typeof('10') === typeof(10)); //false

        //4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
        console.log(`Is type of parseFloat('9.8') Equal typo of 10? `, typeof(parseFloat('9.8')) === typeof(10)); //true

        // 5. Check if 'on' is found in both python and jargon
        let word1 = "python";
        let word2 = "jargon";
        console.log(word1.includes("on") && word2.includes("on"));

        // 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
        let sentence8 = 'I hope this course is not full of jargon.';
        console.log(sentence8.includes('jargon'));

        // 7. Generate a random number between 0 and 100 inclusive.
        console.log(Math.floor(Math.random() * 101));

        // 8.Generate a random number between 50 and 100 inclusive.
        console.log(Math.floor(Math.random() * (101-50) +50));

        //9. Generate a random number between 0 and 255 inclusive.
        console.log(Math.floor(Math.random() * 256));

        // 10. Access the 'JavaScript' string characters using a random number.
        let characters = 'JavaScript';
        let rand = Math.floor(Math.random() * characters.length);
        console.log(characters[rand]);

        // 11.Use console.log() and escape characters to print the following pattern.
        // 1 1 1 1 1
        // 2 1 2 4 8
        // 3 1 3 9 27
        // 4 1 4 16 64
        // 5 1 5 25 125

        let arr = [1, 2, 3, 4, 5];

        for (let i=1; i<=5; i++) {
            let numbers = [];
            for (let j=1; j<=5; j++) {
                if (i  === 1 ) {
                    numbers.push(i);
                } else if (j  === 2 ) {
                    numbers.push(1);
                } else if (j  === 1 || j  === 3 ) {
                    numbers.push(i);
                } else if (j  === 4 ) {
                    numbers.push(i * i);
                } else if (j  === 5 ) {
                    numbers.push(i * i * i);
                }
            }
            console.log(numbers);
        }

        //12. Use substr to slice out the phase because because because
        let sentence = 'You cannot end a sentence with because because because is a conjunction';
        console.log(sentence.substr(31, 23));

        //Exercises: Level 3

        // 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
        let sentence5 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
        console.log(sentence5.toLowerCase().match(/love/g).length);

        //2.Use match() to count the number all because's in the following sentence:'You cannot end a sentence with because because because is a conjunction'
        let sentence4 = 'You cannot end a sentence with because because because is a conjunction';
        console.log(sentence4.match(/because/g).length);

        //3.//30. ** Clean the following text and find the most frequent word(hint, use replace and regular express).
        const sentence7 = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching';
        console.log(sentence7.replace(/[@#$%^&*;!]/g, ''));

        let arr1 = sentence7.replace(/[@#$%^&*;!,.?]/g, '').toLowerCase().split(' ');
        console.log(arr1);
        var mf = 1;
        var m = 0;
        var item;
        for (var i=0; i<arr1.length; i++)
        {
                for (var j=i; j<arr1.length; j++)
                {
                        if (arr1[i] == arr1[j])
                        m++;
                        if (mf<m)
                        {
                        mf=m; 
                        item = arr1[i];
                        }
                }
                m=0;
        }
        console.log(item+" ( " +mf +" times ) ") ;

        //4. Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
        let sentence6 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
        let income = sentence6.match(/\d+/g);
        let salary = income[0]*12;
        let bonus =  income[1]*1;
        let courses =  income[2]*12;
        console.log(salary + bonus + courses);

        
        
        

        