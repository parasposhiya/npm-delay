/**
    * Sleep (pause execution) for a given time with unit
    * @param {number} value - The amount of time to wait
    * @param {'milliseconds'|'seconds'|'minutes'|'hours'} [unit='milliseconds'] - The unit of time (default is milliseconds)
    * @returns {Promise<void>} - A Promise that resolves after the specified delay
**/
const delay = (value, unit = 'milliseconds') => {
    let ms; // variable to hold the converted time in milliseconds

    // Convert the given value into milliseconds based on the unit
    switch (unit) {
        case 'seconds':
            ms = value * 1000; // 1 second = 1000 ms
            break;
        case 'minutes':
            ms = value * 1000 * 60; // 1 minute = 60,000 ms
            break;
        case 'hours':
            ms = value * 1000 * 60 * 60; // 1 hour = 3,600,000 ms
            break;
        case 'milliseconds':
        default:
            ms = value; // already in milliseconds
    }

    // Return a Promise that resolves after the calculated milliseconds
    return new Promise((resolve) => setTimeout(resolve, ms));
};

// Export the function so it can be imported in other files
export default delay;
