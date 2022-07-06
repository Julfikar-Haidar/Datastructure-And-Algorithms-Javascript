class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;   
    } else {
        this.tail.next = newNode; // 10 99
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    this.length++;
    return this
}


pop() {
    if(!this.head) return undefined;
    let popNode = this.tail
    if (this.length === 0) {

        this.head = null;
        this.tail = null;
    } else {
        this.tail = popNode.prev
        this.tail.next = null
        popNode.prev = null;
    }
    this.length--
    return popNode
}


}

let first = new DoublyLinkList()


console.log(first.push(5));
console.log(first.push(8));
console.log(first.push(61));
console.log(first.push(89));
console.log(first.pop());
