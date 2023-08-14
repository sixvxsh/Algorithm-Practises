
const countdown = (i) => {
    console.log(i);
    if (i <= 1) {
        return null;
    }
    countdown(i - 1);
    return null;

}

console.log(countdown(5));