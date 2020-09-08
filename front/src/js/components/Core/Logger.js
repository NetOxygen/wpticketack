/**
 * Simple logger
 */
export default class Logger {
    /**
     * Output a message to the console
     * @param {String} msg - The message to output
     */
    log(msg) {
        console.log(msg);
    }

    /**
     * Output an error message to the console
     * @param {String} msg - The message to output
     */
    err(msg) {
        console.error(msg);
    }
};
