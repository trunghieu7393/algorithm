// QUEUE
// enqueue  same push
// dequeue  same pop
// peek
// size
// isEmpty

class Queue {
  constructor() {
    this.items = []
  }

  enqueue(val) {
    this.items.push(val)
  }

  dequeue() {
    return this.items.shift()
  }

  peek() {
    return this.items[0]
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return this.size() === 0
  }
}

const q = new Queue()
q.enqueue('1')
q.enqueue('2')
q.enqueue('3')
q.enqueue('4')
console.log("🚀 ~ q:", q)
console.log("🚀 ~ peek q:", q.peek())
console.log("🚀 ~ q:", q)

console.log("🚀 ~ dequeue q:", q.dequeue())
console.log("🚀 ~ q:", q)
