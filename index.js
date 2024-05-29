function LinkedList (headNode) {
    return {
        head : headNode,
        //methods
        append : function append(value, node=this.head) {
            if (node.next == null) {
                node.next = Node(value);
            }
            else if (node.next != null) {
                this.append(value, node.next)
            }
        },
        prepend : function prepend(value) {
            let formerHeadPlaceholder = this.head;
            this.head = Node(value, formerHeadPlaceholder);
        },
        size : function size (node = this.head, counter=1) {
            if (node.next == null) {
                return counter
            }
            else {
                counter+=1;
                return this.size(node.next, counter)
            }
        },
        head : () => {
            return this.head
        },
        tail : function tail(node=this.head) {
            if (node.next == null) {
                return node
            }
            else {
                return this.tail(node.next)
            }
        },
        at : function at(index, node=this.head,counter=0) {
            if (index == counter) {
                return node
            }
            else {
                return this.at(index, node.next, counter+1)
            }
        },
        pop : function pop () {
            this.at(this.size()-2).next = null
        },
        contains : function contains(value, node=this.head) {
            let result = false;
            for (let i = 0; i<this.size(); i++) {
                if (value == this.at(i).value) {
                    result = true
                }
            }
            return result
        },
        find : function find(value) {
            let result;
            for (let i = 0; i<this.size(); i++) {
                if (value == this.at(i).value) {
                    return i
                }
                else {
                    result = null
                }
            }
            return result
        },
        toString : function toString () {
            let result = '';
            for (let i = 0; i<this.size(); i++) {
                if (i == this.size()-1) {
                    result += this.at(i).value
                }
                else {
                    result += this.at(i).value + ' -> ';
                }
            }
            return result
        },
        insertAt : function insertAt(value, index) {
            console.log(this.size())
            for (let i = 0; i<this.size(); i++) {
                if (i == index) {
                    if (i == 0) {
                        this.head = Node(value, this.head)
                    }
                    else {
                        this.at(i-1).next = Node(value, this.at(i));
                    }
                }
            }
            console.log(this.size())
        },
        removeAt : function removeAt(index) {
            for (let i = 0; i<this.size(); i++) {
                if (i == index) {
                    if (i == 0) {
                        this.head = this.head.next
                    }
                    else {
                        console.log(this.at(index-1))
                        this.at(index-1).next = this.at(index).next
                    }
                }
            }
        },
    }
};

function Node (value, next=null) {  //serve il next=null??
    return {
        value,
        next,
    }
};

//test
const node1 = Node(13);
const node2 = Node(2);
const node3 = Node(5);
const node4 = Node(104);

const list = LinkedList(node1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
//sort values
list.head = node2;
node2.next = node3;
node3.next = node1;
node1.next = node4
//append
list.append(110);
list.append(2000);
//prepend
list.prepend(1);
list.prepend(0.5);
//size
// console.log(list.size());
//head
// console.log(list.head);
//tail
// console.log(list.tail());
//at index
// console.log(list.at(0));
//pop
// list.pop();
//contains
// console.log(list.contains(110));
//find
// console.log(list.find(2));
//toString
//insertAt
// list.insertAt(14, 5);
console.log(list.toString());
//removeAt
// list.removeAt(0)

// console.info(list);
// const j = JSON.stringify(list);
// console.log(j)


