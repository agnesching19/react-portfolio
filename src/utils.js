console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

const substract = (a, b) => a - b;

export default substract;

// 2 ways to export  (1)default export (2)named exports
// export { square, add, substract as default };


