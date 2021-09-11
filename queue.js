// class Queue {
//     constructor(){
//         this.storage = []
//         this.head = 0
//         this.tail = 0
//         this.size = 0
     
//     }

//     enqueue(data){
//         this.storage[this.tail] = data 
//         this.tail++;
//         this.size++;
        
//     }

//     dequeue(){
//         if(this.size === 0){
//             return null
//         }

//         let data = this.storage[this.head]
//         this.head++;
//         if(this.head === this.tail){
//             this.head = 0
//             this.tail = 0
//         }

//         this.size--
//         return data 
//     }
// }

// const queue = new Queue()

// queue.enqueue(5);
// queue.enqueue(7);
// console.log(queue.head);
// console.log(queue.tail);
// console.log(queue.size);
// console.log(queue.storage);

// queue.dequeue()
// queue.dequeue()
// console.log(queue.head);
// console.log(queue.tail);
// console.log(queue.size);
// console.log(queue.storage);

// circular queue

class CircularQueue {
    constructor(capacity) {
        this.storage = []
        this.head = 0
        this.tail = 0
        this.size = 0
        this.capacity = capacity
    }
    
    isFull(){
        return this.capacity === this.size
    }

    enqueue(data){
        if(this.isFull()){
            throw new Error("Queue is full")
        }

        this.storage[this.tail] = data
        this.tail = (this.tail + 1) % this.capacity
        this.size++
    }
    dequeue(){
        if(this.size === 0){
            return null
        }

        let data = this.storage[this.head]
        console.log(this.head);
        this.head =(this.head + 1) % this.capacity
        console.log(this.head);
        this.size--
        return data
    }
}

const queue = new CircularQueue(3)

queue.enqueue(5);
queue.enqueue(7);
// queue.enqueue(9);
console.log(queue.head);
console.log(queue.tail);
console.log(queue.size);
console.log(queue.storage);


// queue.dequeue()
// queue.dequeue()
queue.dequeue()
console.log(queue.head);
console.log(queue.tail);
console.log(queue.size);
console.log(queue.storage);

