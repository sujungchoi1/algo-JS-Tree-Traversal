class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

//                10
//            6         15
//          3  8          20
// Queue: [10] -> [] -> [6,15] -> [15,3,8] -> [3,8,20] -> [8,20]
// Data: []    -> [10]->[10] -> [10,6]    -> [10,6,15] -> [10,6,15,3]

    BFS(){
        var node = this.root,
            data = [], // what will be returned at the end
            queue = []; // FIFO
        queue.push(node);

        while(queue.length){ //can't use while(queue) b/c ![] is false
           node = queue.shift();
           data.push(node.value);
           if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        //    console.log("data", data);
        //    console.log("queue", queue);

        }
        return data;
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS()); // [ 10, 6, 15, 3, 8, 20 ]

    

