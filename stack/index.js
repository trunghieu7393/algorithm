// push
// [1,2,3,4,5]
// pop
// peek
// size
// isEmpty

class Stack {
  constructor() {
    this.items = []
    this.count = 0
  }

  push(value) {
    this.items[this.count] = value
    this.count++
  }

  peek() {
    if (this.count === 0) return null
    return this.items[this.count - 1]
  }

  pop() {
    if (this.count === 0) return null
    const deletedItem = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return deletedItem
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }
}

const s = new Stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
console.log("🚀 ~ s:", s)
console.log("🚀 ~ pop s:", s.pop())
console.log("🚀 ~ s:", s)
console.log("🚀 ~ peek s:", s.peek())
console.log("🚀 ~ size s:", s.size())
console.log("🚀 ~ isEmpty s:", s.isEmpty())


