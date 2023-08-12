

function reversestr(str) {

    // convert string into array
    // use the reverse method of array
    // convert back the array into string
    // return the result

    // const arr =  str.split('');
    // const arrReverse = arr.reverse();
    // return arrReverse.join('');


    let reversed = '';

    for(let char of str) {
        reversed = char + reversed;
    }
    return reversed;

}
reversestr('sia');
module.exports = reversestr


//first solution
// return str.split('').reverse().join('');