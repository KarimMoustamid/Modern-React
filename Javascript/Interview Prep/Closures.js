const privateCounter = () => {
    let count = 0;
    return {
        increment: (val = 1) => count += val,
        getValue: () => count
    };
};

const counter = privateCounter();
console.log(counter.getValue());
counter.increment(5);
console.log(counter.getValue());

const privateSecret = () => {
    const secret = 'top secret';
    return {
        reveal: () => secret
    };
}

const secret = privateSecret();
console.log(secret.reveal());