const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 144, 'grisha', true];

let types = { }

for(let item of arr)
{
    const type = typeof(item);
    if(!(type in types))
    {
        types[type] = 0;
    }
    types[type]++;
}
console.log(types);