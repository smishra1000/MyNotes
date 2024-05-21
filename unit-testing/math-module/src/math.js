// src/math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;
// export default divide;

const divide = (a, b) => {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  };
  export default divide;

// New function to filter array of objects by age
export const filterByAge = (arr, age) => arr.filter(item => item.age > age);  
