const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 144, 'grisha', true];

let types = { number: 0, string: 0, boolean: 0 }

for(let type of arr)
{
    if(typeof(type) === 'string')
    {
        types.string++;
    }
    else if(typeof(type) === 'number')
    {
        types.number++;
    }
    else if(typeof(type) === 'boolean')
    {
        types.boolean++;
    }
}
console.log(types);