

function reversestr(str) {

    // convert string into array
    // use the reverse method of array
    // convert back the array into string
    // return the result
    const arr =  str.split('');
    const arrReverse = arr.reverse();
    return arrReverse.join('');

}

module.exports = reversestr