class LinkedListNode {
    constructor(v, prev, next) {
        this.v = v;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // add node to end of the list
    push(v) {
        const node = new LinkedListNode(v);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        return this;
    }

    pop() {
        let last = this.tail;

        if (last) {
            this.tail = last.prev;

            if (this.tail) {
                this.tail.next = null;
            }

            if (this.head === last) {
                this.head = null;
            }
        }

        return (last) ? last.v : undefined;
    }

    unshift(v) {
        let node = new LinkedListNode(v);

        node.next = this.head;
        this.head = node;

        return this;
    }

    shift() {
        let node;
        
        if (this.head) {
            node = this.head;
            this.head = this.head.next;
            if (node === this.tail) {
                // single item
                this.tail = this.head;
            }
        }

        return (node) ? node.v : undefined;
    }

    // auxillaries
    values() {
        let p = this.head;
        let vals = [];
        while(p) {
            vals.push(p.v);
            p = p.next;
        }

        return vals;
    }

    isEmpty() {
        return this.head == null; // treat undefined as null
    }    
}

module.exports = LinkedList;