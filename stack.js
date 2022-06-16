// class Stack { 
  
//   // Array is used to implement stack 
//   constructor() 
//   { 
//       this.items = []; 
//       console.log(this.items);

//   } 

//   // push function 
// push(element) 
// { 
//     // push element into the items 
//     this.items.push(element); 
// }
// // pop function 
// pop() 
// { 
//     // return top most element in the stack 
//     // and removes it from the stack 
//     // Underflow if stack is empty 
//     if (this.items.length == 0) 
//         return "Underflow"; 
//     return this.items.pop(); 
// } 
// // peek function 
// peek() 
// { 
//     // return the top most element from the stack 
//     // but does'nt delete it. 
//     return this.items[this.items.length - 1]; 
// }

// // isEmpty function 
// isEmpty() 
// { 
//     // return true if stack is empty 
//     return this.items.length == 0; 
// } 
// // printStack function 
// printStack() 
// { 
//     var str = ""; 
//     for (var i = 0; i < this.items.length; i++) 
//         str += this.items[i] + " "; 
//     return str; 
// }
// } 

// // creating object for stack class 
// var stack = new Stack(); 
  
// // testing isEmpty and pop on an empty stack 
  
// // returns false 
// console.log(stack.isEmpty());  
  
// // returns Underflow 
// console.log(stack.pop());  
// // Adding element to the stack 
// stack.push(10); 
// stack.push(20); 
// stack.push(30); 
// console.log(stack.printStack()); 

// class Stack {
//   constructor() {
//       this.items = []
//       this.count = 0
//   }

//   // Add element to top of stack
//   push(element) {
//       this.items[this.count] = element
//       console.log(`${element} added to ${this.count}`)
//       this.count += 1
//       console.log(this.count);
//       return this.count - 1
//   }

//   // Return and remove top element in stack
//   // Return undefined if stack is empty
//   pop() {
//       if(this.count == 0) return undefined
//       console.log(this.count);
//       let deleteItem = this.items[this.count - 1]
//       this.count -= 1
//       console.log(`${deleteItem} removed ${this.count}`)
//       return deleteItem
//   }

//   // Check top element in stack
//   peek() {
//       console.log(`Top element is ${this.items[this.count - 1]}`)
//       return this.items[this.count - 1]
//   }

//   // Check if stack is empty
//   isEmpty() {
//       console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
//       return this.count == 0
//   }

//   // Check size of stack
//   size() {
//       console.log(`${this.count} elements in stack`)
//       return this.count
//   }

//   // Print elements in stack
//   print() {
//       let str = ''
//       for(let i = 0; i < this.count; i++) {
//           str += this.items[i] + ' '
//       }
//       return str
//   }

//   // Clear stack
//   clear() {
//       this.items = []
//       this.count = 0
//       console.log('Stack cleared..')
//       return this.items
//   }
// }

// const stack = new Stack()

// stack.isEmpty()

// stack.push(100)
// stack.push(200)

// stack.peek()

// // stack.push(300)

// console.log(stack.print())

// // stack.pop()
// stack.pop()

// stack.clear()

// console.log(stack.print())

// stack.size()

// stack.isEmpty()


class Stack {
    constructor() {
        this.dataset = {}
        this.count = 0
    }

    push(key) {
        this.count++;   
        this.dataset[this.count] = key
        return this.dataset
    }

    pop(key) {
        let deleteItem = this.dataset[this.count]
        delete this.dataset[this.count]
        this.count--;
        return deleteItem
    }

    peek(key) {
        return this.dataset[this.count]
    }
}

let stack = new Stack()
console.log(stack.push(10));
console.log(stack.push(11));
console.log(stack.push(18));
// console.log(stack.pop());
console.log(stack.peek());