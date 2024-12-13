const sum = (...args) => {
    let res = 0;
    for(let item of args)
    {
        res += item;
    }
    return res;
}
const b = sum(0)
console.log(b);