const fs = require('fs');
const {FILE_PATH} = require('../common/constants');

/**
 * @description Create a file in given file path
 */
const createFile = () => {
    fs.writeFileSync(FILE_PATH, "");
};

/**
 * @description Append message block to given file
 * @param data: Message which needs to be appended
 */
const writeToFile = (data) => {
    try {
        fs.appendFileSync(FILE_PATH, `${data} \n`);
    } catch (writeErr) {
        console.error("Error while writing to file: ", writeErr)
    }
};

module.exports = {
    createFile,
    writeToFile
};
