/**javascript . a string of characters is given. write a function which returns a new string of random characters from the original string, but its length is being set as an argument every time function called */

const originalString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const length = 10;

function generateKey(originalString, length) {
    let randomSubstring = '';
    const originalStringLength = originalString.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * originalStringLength);
        randomSubstring += originalString.charAt(randomIndex);
    }

    return randomSubstring;
}

const randomSubstring = generateKey(originalString, length);
console.log(randomSubstring);