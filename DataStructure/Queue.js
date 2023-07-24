export default class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item); // add item on queue
  }

  dequeue() {
    return this.items.shift(); // return the very last item inside array
  }

  peek() {
    return this.items[0];
    // it just returns the first item
    // similar with dequeue
    // no item in array -> it gives undefined
  }

  getSize() {
    return this.item.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}
