const random = (min, max) => {
    if(max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const generateKey = (length, characters) => {
    let pass = '';
    for(let i = 0; i < length; i++)
    {
        const index = random(0, characters.length - 1);
        pass += characters[index];
    }
    return pass;
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i