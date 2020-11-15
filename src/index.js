const {createFile} = require('./util/file');
const tasks = require('./service/word.generator');

/*
// Task one
tasks.taskSyncRandomWords();

// Task two
tasks.taskSyncFizzBuzzWords();

// Task three version 1
tasks.taskAsyncRandomWords();

// Task three version 2
tasks.taskAsyncFizzBuzzWords();

// Task four version 1
tasks.taskSyncWithErrorHandling();

// Task four version 2
tasks.taskAsyncWithErrorHandling();

// Task five version 1
createFile();
tasks.taskSyncWithWriteToFile();

// Task five version 2
createFile();
tasks.taskAsyncWithWriteToFile();
*/

// Task to test performance with slow mode enabled. To enable slow mode SLOW_MODE_ENABLED is true.
createFile();
tasks.taskAsyncWithTimer();
