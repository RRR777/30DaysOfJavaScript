console.log(countries);
alert('Open the console and check if the countries has been loaded');

// Exercises: Level 1
//1. Calculate the total annual income of the person from the following text. 
    const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
    const pattern = /\d+/g;
    //const incomes = pattern.test(text); //true
    const incomes = text.match(pattern);
    const [salary, annual, courses] = incomes;

    let totoalIncome = parseInt(salary)*12 + parseInt(annual) + parseInt(courses)*12;

    console.log(incomes);
    console.log(totoalIncome);


//2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
// points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12

const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const sortedPoints = points.sort((a,b) => a - b);
let distance = parseInt(sortedPoints[sortedPoints.length-1] - parseInt(sortedPoints[0]));

console.log(sortedPoints);
console.log(distance);

//3. Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True
    const is_valid_variable = variable => {
        const pattern = /^[^\d-%!*+\/&(){}][^-%!*+\/&(){}]+$/g;
        console.log(pattern.test(variable));
    }
    is_valid_variable('first_name') // True
    is_valid_variable('first-name') // False
    is_valid_variable('1first_name') // False
    is_valid_variable('firstname') // True
    is_valid_variable('first%name') // False
    is_valid_variable('firstname!') // False
    is_valid_variable('first4name') // True

// Exercises: Level 2
//1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

     paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
//     console.log(tenMostFrequentWords(paragraph))
//     [(6, 'love'),
//     (5, 'you'),
//     (3, 'can'),
//     (2, 'what'),
//     (2, 'teaching'),
//     (2, 'not'),
//     (2, 'else'),
//     (2, 'do'),
//     (2, 'I'),
//     (1, 'which'),
//     (1, 'to'),
//     (1, 'the'),
//     (1, 'something'),
//     (1, 'if'),
//     (1, 'give'),
//     (1, 'develop'),
//     (1, 'capabilities'),
//     (1, 'application'),
//     (1, 'an'),
//     (1, 'all'),
//     (1, 'Python'),
//     (1, 'If')
//     ]
// console.log(tenMostFrequentWords(paragraph, 10))
// [   (6, 'love'),
//     (5, 'you'),
//     (3, 'can'),
//     (2, 'what'),
//     (2, 'teaching'),
//     (2, 'not'),
//     (2, 'else'),
//     (2, 'do'),
//     (2, 'I'),
//     (1, 'which')
// ]
const tenMostFrequentWords  = (paragraph, number) => {
    const patern = /[!.,?><&^*-+\/%$#@;]+/g;
    const wordsArray = paragraph.replace(patern, '').split(' ');
    const words = new Set(wordsArray);

    const counts = [];

    for (const word of words) {
    const filteredWord = wordsArray.filter(item => item === word);
    counts.push({ count: filteredWord.length, word: word });
    }

    counts.sort(function(a, b) {
        if (a.count < b.count) return 1
        if (a.count > b.count) return -1
        return 0
    })
    
    return counts.slice(0, number);
}
console.log(tenMostFrequentWords(paragraph, 10));
console.log(tenMostFrequentWords(paragraph, 3));
console.log(tenMostFrequentWords(paragraph));

// Exercises: Level 3
//1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
    const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

    // const cleanText = sentence => {
        // const pattern = /[!.,?><&^*-+\/%$#@;]+/g;
        // const cleanSentence = sentence.replace(pattern, '');

        // return cleanSentence;
//    }

    const cleanText = sentence => sentence.replace(/[!.,?><&^*-+\/%$#@;]+/g, '');

    console.log(cleanText(sentence));
//  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher

// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
const mostFrequentWords = cleanedText => {
    const cleanSentenceArray = cleanedText.split(' ');
    const words = new Set(cleanSentenceArray);

    const counts = [];

    for (const word of words) {
    const filteredWord = cleanSentenceArray.filter(item => item === word);
    counts.push({ count: filteredWord.length, word: word });
    }

    counts.sort(function(a, b) {
        if (a.count < b.count) return 1
        if (a.count > b.count) return -1
        return 0
    })

    return counts.slice(0, 3);
}

console.log(mostFrequentWords(cleanText(sentence)))
//  [(3, 'I'), (2, 'teaching'), (2, 'teacher')]