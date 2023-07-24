import Queue from "./Queue.js";

const cars = new Queue();

cars.enqueue("Honda");
cars.enqueue("Toyota");
cars.enqueue("Hyundai");

console.log(cars.dequeue());
console.log(cars.peek());
