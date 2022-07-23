// LIFO - Last In First Out

function createStack() {
    const items = []
    return {
        push(item) {
            items.push(item)
        },
        pop() {
            return items.pop()
        },
        peek() {
            return items[items.length - 1]
        },
        get length() {
            return items.length
        },
        isEmpty() {
            return items.length == 0
        }
    }
}

class Stack {
    constructor() {
        this.items = []
    }
    push(item) {
        this.items.push(item)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[items.length - 1]
    }
    get length() {
        return this.items.length
    }
    isEmpty() {
        return this.items.length == 0
    }
}

const s = new Stack
s.push(5)
console.log('s.length:',s.length);