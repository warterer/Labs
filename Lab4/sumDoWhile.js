const sum = (...args) => {
    let res = 0;
    let i = 0;
    if (args.length > 0)
    {
        do
        {
            res += args[i];
            i++;
        } while (i < args.length);
    }
    return res;
}
const d = sum(1, -1, 1)
console.log(d);