import Stack from "./Stack/Stack";

const books = new Stack();

console.log(`Stack is empty? ${books.isEmpty()}`);
books.push("+ Esperto que o Diabo");
console.log(`Book in top: ${books.peek()}`);
books.push("Quem pensa enriquece");
console.log(`Book in top: ${books.peek()}`);
books.push("Pai rico, pai pobre");
console.log(`Book in top: ${books.peek()}`);
books.push("O poder da ação");
console.log(`Book in top: ${books.peek()}`);
books.pop();
console.log(`Book in top: ${books.peek()}`);
console.log(`Stack is empty? ${books.isEmpty()}`);
console.log(books.size());
console.log(books.printItems());
books.clear();
console.log(`Stack is empty? ${books.isEmpty()}`);