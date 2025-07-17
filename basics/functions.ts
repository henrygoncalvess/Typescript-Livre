const fruits = ["apple", "avocado", "pineapple", "tomato", "watermelon"];

const fruitsTable = fruits.map((fruit, index): string => {
    return `${index}: ${fruit}`;
});

console.log("Built in function expecting especific params:");
console.log(fruitsTable);

// Return type of Error Handling functions:

// "The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program."
const handleError = (errmsg: string): never => {
    throw new Error(errmsg);
};

export {};
