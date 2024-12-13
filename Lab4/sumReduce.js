const sum = (...args) => {
    return args.reduce((total, curr) => total + curr, 0);
}
const e = sum(10, -1, -1, -1)
console.log(e);