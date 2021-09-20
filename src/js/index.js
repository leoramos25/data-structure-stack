const Stack = require("./Stack/Stack");

const numbers = new Stack();

console.log(`Stack is empty? ${numbers.isEmpty()}`);
numbers.push(1);
console.log(`Stack top: ${numbers.peek()}`);
numbers.push(3);
console.log(`Stack top: ${numbers.peek()}`);
numbers.push(5);
console.log(`Stack top: ${numbers.peek()}`);
numbers.push(7);
console.log(`Stack top: ${numbers.peek()}`);
numbers.push(9);
console.log(`Stack top: ${numbers.peek()}`);
numbers.push(11);
console.log(`Stack top: ${numbers.peek()}`);
numbers.pop();
console.log(`Stack top: ${numbers.peek()}`);
console.log(`Stack is empty? ${numbers.isEmpty()}`);
console.log(`Items in stack: ${numbers.printItems()}`);
numbers.clear();
console.log(`Stack is empty? ${numbers.isEmpty()}`);