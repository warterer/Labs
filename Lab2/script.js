let myName = "Artem";
const birthYear = 2007;
const greeting = (name) => {
    console.log(`Hello! ${name}`);
}
greeting(myName);
const range = (start, end) => {
    const res = [];
    for (let i = start; i <= end; i++) {
        res.push(i);
    }
    return res;
}
const rangeOdd = (start, end) => {
    const res = [];
    for (let i = start; i <= end; i++) {
        if(i % 2 !== 0)
        {
            res.push(i);
        }
    }
    return res;
}
console.log(range(15, 30));
console.log(rangeOdd(15, 30));

const average = (a, b) => {
    return (a + b) / 2;
}
const square = (x) => {
    return x ** 2;
}
const cube = (x) => {
    return x ** 3;
}
const calculate = () => {
    const res = [];
    for (let i = 0; i < 10; i++) {
        const sq = square(i);
        const cb = cube(i);
        res.push(average(sq, cb));
    }
    return res;
}
console.log(calculate());

const fn = () => {
    const obj1 = { name: "obj1 name" };
    let obj2 = { name: "obj2 name" };

    obj1.name = "New obj1 name";
    obj2.name = "New obj2 name";

    // obj1 = { name: "Another const" }; // obj1 - константа
    obj2 = { name: "Another name" };

    console.log(obj1);
    console.log(obj2);
}
fn();

function createUser(name, city) {
    return { name, city };
}
console.log(createUser("Marcus Aurelius", "Roma"));

const phoneBook = [
    { name: "Marcus Aurelius", phone: "+380445554433" },
    { name: "Joseph Stalin", phone: "+380991234567" },
    { name: "Pol Pot", phone: "+380671112233" }
];
const findPhoneByName = (name) => {
    for (const contact of phoneBook) {
        if (contact.name === name) {
            return contact.phone;
        }
    }
    return "Contact not found";
}
console.log(findPhoneByName("Joseph Stalin"));
console.log(findPhoneByName("kofrnevrpeovrl"));

const phoneBookHash = {
    "Marcus Aurelius": "+380445554433",
    "Joseph Stalin": "+380991234567",
    "Pol Pot": "+380671112233"
};
const findPhoneByNameHash = (name) => {
    return phoneBookHash[name] || "Contact not found";
}
console.log(findPhoneByName("Pol Pot"));
console.log(findPhoneByName("kofrnevrpeovrl"));