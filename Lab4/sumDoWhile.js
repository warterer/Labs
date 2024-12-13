const sum = (...args) => {
    let res = 0;
    let i = 0;
    if (args.length > 0)
    {
        do
        {
            total += args[i];
            i++;
        } while (i < args.length);
    }
    return res;
}
const c = sum()
console.log(c);