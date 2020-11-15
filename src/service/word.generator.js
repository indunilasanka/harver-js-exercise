const {getRandomWordSync, getRandomWord} = require('word-maker');
const {writeToFile} = require('../util/file');
const {SLOW_MODE_ENABLED, FIZZ_BUZZ, FIZZ, BUZZ} = require("../common/constants");

/**
 * @description Print numbers from 1 to 100 to the console, for each number also print a random word using the function getRandomWordSync.
 */
const taskSyncRandomWords = () => {
    for (let i = 1; i <= 100; i++) {
        console.log(`${i}: ${getRandomWordSync()}`)
    }
};

/**
 * @description Print numbers from 1 to 100 to the console, for each number also print a random word using the function getRandomWordSync,
 * but for multiples of three, print "Fizz" (instead of the random word),
 * for multiples of five, print "Buzz" and
 * for numbers which are both multiples of three and five, print "FizzBuzz".
 */
const taskSyncFizzBuzzWords = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i}: ${FIZZ_BUZZ}`)
        } else if (i % 3 === 0) {
            console.log(`${i}: ${FIZZ}`)
        } else if (i % 5 === 0) {
            console.log(`${i}: ${BUZZ}`)
        } else {
            console.log(`${i}: ${getRandomWordSync()}`)
        }
    }
};

/**
 * @description Print numbers from 1 to 100 to the console, for each number also print a random word using the function getRandomWord
 */
const taskAsyncRandomWords = () => {
    const response = [];

    for (let i = 1; i <= 100; i++) {
        response.push(getRandomWord());
    }

    Promise.all(response).then(words => {
        words.forEach((word, index) => {
                console.log(`${index + 1}: ${word}`);
            }
        )
    })
};

/**
 * @description Print numbers from 1 to 100 to the console, for each number also print a random word using the function getRandomWord,
 * but for multiples of three, print "Fizz" (instead of the random word),
 * for multiples of five, print "Buzz" and
 * for numbers which are both multiples of three and five, print "FizzBuzz".
 */
const taskAsyncFizzBuzzWords = () => {
    const response = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            response.push(FIZZ_BUZZ);
        } else if (i % 3 === 0) {
            response.push(FIZZ);
        } else if (i % 5 === 0) {
            response.push(BUZZ);
        } else {
            response.push(getRandomWord());
        }
    }

    Promise.all(response).then(words => {
        words.forEach((word, index) => {
                console.log(`${index + 1}: ${word}`);
            }
        )
    })
};

/**
 * @description Print numbers from 1 to 100 to the console, for each number also print a random word using the function getRandomWordSync,
 * but for multiples of three, print "Fizz" (instead of the random word),
 * for multiples of five, print "Buzz" and
 * for numbers which are both multiples of three and five, print "${FIZZ_BUZZ}".
 * When an error is caught from getRandomWordSync, it print "It shouldn't break anything!" instead of any other word.
 */
const taskSyncWithErrorHandling = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i}: ${FIZZ_BUZZ}`)
        } else if (i % 3 === 0) {
            console.log(`${i}: ${FIZZ}`)
        } else if (i % 5 === 0) {
            console.log(`${i}: ${BUZZ}`)
        } else {
            try {
                console.log(`${i}: ${getRandomWordSync({withErrors: true})}`)
            } catch (err) {
                console.log(`${i}: It shouldn't break anything!`);
            }
        }
    }
};

/**
 * @description Print numbers from 1 to 100 to the console, for each number also print a random word using the function getRandomWordSync,
 * but for multiples of three, print "Fizz" (instead of the random word),
 * for multiples of five, print "Buzz" and
 * for numbers which are both multiples of three and five, print "FizzBuzz".
 * When an error is caught from getRandomWord, it print "It shouldn't break anything!" instead of any other word.
 */
const taskAsyncWithErrorHandling = () => {
    const result = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push(FIZZ_BUZZ);
        } else if (i % 3 === 0) {
            result.push(FIZZ);
        } else if (i % 5 === 0) {
            result.push(BUZZ);
        } else {
            result.push(getRandomWord({withErrors: true}).catch(() => "It shouldn't break anything!"));
        }
    }

    Promise.all(result).then(words => {
        words.forEach((word, index) => {
                console.log(`${index + 1}: ${word}`);
            }
        )
    })
};

/**
 * @description Write numbers from 1 to 100 to a text file, for each number also append a random word using the function getRandomWordSync,
 * but for multiples of three, write "Fizz" (instead of the random word),
 * for multiples of five, write "Buzz" and
 * for numbers which are both multiples of three and five, write "${FIZZ_BUZZ}".
 * When an error is caught from getRandomWordSync, it write "It shouldn't break anything!" instead of any other word.
 */
const taskSyncWithWriteToFile = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            writeToFile(`${i}: ${FIZZ_BUZZ}`)
        } else if (i % 3 === 0) {
            writeToFile(`${i}: ${FIZZ}`)
        } else if (i % 5 === 0) {
            writeToFile(`${i}: ${BUZZ}`)
        } else {
            try {
                writeToFile(`${i}: ${getRandomWordSync({withErrors: true})}`)
            } catch (err) {
                writeToFile(`${i}: It shouldn't break anything!`);
            }
        }
    }
};

/**
 * @description Write numbers from 1 to 100 to a text file, for each number also append a random word using the function getRandomWordSync,
 * but for multiples of three, write "Fizz" (instead of the random word),
 * for multiples of five, write "Buzz" and
 * for numbers which are both multiples of three and five, write "FizzBuzz".
 * When an error is caught from getRandomWord, it write "It shouldn't break anything!" instead of any other word.
 */
const taskAsyncWithWriteToFile = () => {
    const result = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push(FIZZ_BUZZ);
        } else if (i % 3 === 0) {
            result.push(FIZZ);
        } else if (i % 5 === 0) {
            result.push(BUZZ);
        } else {
            result.push(getRandomWord({withErrors: true}).catch(() => "It shouldn't break anything!"));
        }
    }

    Promise.all(result).then(words => {
        words.forEach((word, index) => {
                writeToFile(`${index + 1}: ${word}`);
            }
        )
    })
};

/**
 * @description Write numbers from 1 to 100 to a text file, for each number also append a random word using the function getRandomWordSync,
 * but for multiples of three, write "Fizz" (instead of the random word),
 * for multiples of five, write "Buzz" and
 * for numbers which are both multiples of three and five, write "FizzBuzz".
 * When an error is caught from getRandomWordSync, it write "It shouldn't break anything!" instead of any other word.
 * Also calculate total time taken for whole process and print it to console.
 */
const taskAsyncWithTimer = () => {
    console.time("Total time taken: ");

    const result = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push(FIZZ_BUZZ);
        } else if (i % 3 === 0) {
            result.push(FIZZ);
        } else if (i % 5 === 0) {
            result.push(BUZZ);
        } else {
            result.push(getRandomWord({
                withErrors: true,
                slow: SLOW_MODE_ENABLED
            }).catch(() => "It shouldn't break anything!"));
        }
    }

    Promise.all(result).then(words => {
        words.forEach((word, index) => {
                writeToFile(`${index + 1}: ${word}`);
            }
        );
        console.timeEnd("Total time taken: ");
    });
};

module.exports = {
    taskSyncRandomWords,
    taskSyncFizzBuzzWords,
    taskAsyncRandomWords,
    taskAsyncFizzBuzzWords,
    taskSyncWithErrorHandling,
    taskAsyncWithErrorHandling,
    taskSyncWithWriteToFile,
    taskAsyncWithWriteToFile,
    taskAsyncWithTimer
};
