class Queue {
  constructor() {
    this.queue = [];
  }

  // this method will add an element to the last
  enQueue(elem) {
    return this.queue.push(elem);
  }

  // this method will remove the first element
  deQueue() {
    return this.queue.shift();
  }

  //   show the first element of the queue
  front() {
    // check whether the queue is empty or not
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.queue[0];
  }

  //   clear the queue
  clear() {
    return (this.queue = []);
  }

  // this method will give the last element of the queue
  peek() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    return this.queue[this.queue.length - 1];
  }

  // check if queue is empty
  isEmpty() {
    return this.queue.length === 0 ? true : false;
  }
  //   check the size of the queue
  size() {
    return this.queue.length;
  }

  //   prints the queue
  printQueue() {
    let string = "";
    for (let i = 0; i < this.queue.length; i++) {
      string += this.queue[i] + "\n";
    }
    return string;
  }

  //   check whether queue contains some element
  conatains(elem) {
    return this.queue.includes(elem);
  }

  //   copy the queue
  clone() {
    let newQueue = new Queue();
    newQueue.queue = [...this.queue];
    return newQueue;
  }

  //   convert queue into array
  toArray() {
    return [...this.queue];
  }

  //   convert queue into string
  toString() {
    return this.queue.toString();
  }
  //    smae but with another method
  toString2() {
    return this.queue.join(", ");
  }
}

let myQueue = new Queue();

myQueue.enQueue(1);
myQueue.enQueue(2);
myQueue.enQueue(3);
myQueue.enQueue(4);
myQueue.enQueue(5);
myQueue.enQueue(6);

// console.log(myQueue.peek());
console.log(myQueue.clone());
console.log(myQueue.toArray());
console.log(myQueue.toString());
console.log(myQueue.toString2());

console.log(myQueue.printQueue());

console.log(myQueue.clear());
