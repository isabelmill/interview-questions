// FIFO - first In First Out

function createQueue() {
    const items = [1, 2, 3]
    return {
        enqueue(item) {
            items.unshift(item)
        },
        dequeue() {
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

class Queue {

    constructor() {
        this.data = [];
        this.rear = 0;
        this.size = 10;
    }

    enqueue(element) {
        if (this.rear < this.size) {
            this.data[this.rear] = element;
            this.rear = this.rear + 1;
        }
    }

    length() {
        return this.rear;
    }

    isEmpty() {
        return this.rear === 0;
    }

    getFront() {
        if (this.isEmpty() === false) {
            return this.data[0];
        }
    }

    getLast() {
        if (this.isEmpty() === false) {
            return this.data[this.rear - 1];
        }
    }

    dequeue() {
        if (this.isEmpty() === false) {
            this.rear = this.rear - 1;
            return this.data.shift();
        }
    }

    print() {
        for (let i = 0; i < this.rear; i++) {
            console.log(this.data[i]);
        }
    }

    clear() {
        this.data.length = 0;
        this.rear = 0;
    }
}

const q = new Queue
q.enqueue(5)
q.enqueue(7)
