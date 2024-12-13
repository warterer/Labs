const array = () => {
    const arr = [];

    const get = (index) => {
        return arr[index];
    }
    get.push = function(value) {
        arr.push(value);
    };
    get.pop = function() {
        return arr.pop();
    };
    return get;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined