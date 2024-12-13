const pipe = (...fns) => {
    if (!fns.every(fn => typeof(fn) === 'function'))
    {
        throw new Error('All arguments must be functions');
    }
    return x => fns.reduce((value, fn) => fn(value), x);
}
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const f1 = pipe(inc, twice, cube);
console.log(f1(5));
const f2 = pipe(inc, inc);
console.log(f2(7));
try {
    const f3 = pipe(inc, 7, cube);
} catch(error){
    console.error(error.message);
}