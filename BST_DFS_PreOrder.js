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

    DFSPreOrder(){
        //to store the values of nodes visited
        var data = [];
        //storing the root of the BST; doesn't have to start from the root
        var current = this.root;
        
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left); // node 10 gets stacked until all the left side is traversed
            if(node.right) traverse(node.right);
        }
        //invoking the helper function with the current variable
        traverse(current);
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
console.log(tree.DFSPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
    

