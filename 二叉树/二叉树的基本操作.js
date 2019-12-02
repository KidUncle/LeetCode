// 二叉树的节点
function Node(val,right,left){
  this.val = val;
  this.left = left;
  this.right = right;
}

Node.prototype = {
  show: function(){
    console.log(this.val);
  }
}

// 二叉树的定义函数
function Tree(){
  this.root = null;
}

Tree.prototype = {
  // 插入节点
  insert: function(val){
    let node = new Node(val,null,null);
    if(!this.root) {
      this.root = node;
      return;
    }
    let current , parent;
    current = this.root;
    while(current)
    {
      parent = current;
      if(val < parent.val)
      {
        current = current.left;
        if(!current){
          parent.left = node;
          return;
        }
      }else{
        current = current.right;
        if(!current){
          parent.right = node;
          return;
        }
      }
    }    
  },

  // 前序遍历 ---- 递归
  preOrder: function(node){
    if(node){
      node.show();
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  },
  // 中序遍历 ---- 递归
  inOrder: function(node){
    if(node){
      this.inOrder(node.left);
      node.show();
      this.inOrder(node.right);
    }
  },
  // 后序遍历 --- 递归
  laterOrder: function(node){
    if(node){
      this.laterOrder(node.left);
      this.laterOrder(node.right);
      node.show();
    }
  },
  // 层序遍历
  layerOrder: function(node){
    let queue = [];
    if(node){
      queue.push(node);
      while(queue.length > 0){
        let current = queue.shift();
        current.show();
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
      }
    }
  },
  // 二叉树中值最小的节点
  getMin: function(){
    let current = this.root;
    while(current){
      if(!current.left) return current;
      current = current.left;
    }
  },
  // 二叉树中值最大的节点
  getMax: function(){
    let current = this.root;
    while(current){
      if(!current.right) return current;
      current = current.right;
    }
  },
  // 获取二叉树的深度
  getDeep: function(root,deep){
    deep = deep || 0;
    if(!root) return deep;
    deep++;
    let dLeft = this.getDeep(root.left,deep);
    let dRight = this.getDeep(root.right,deep);
    return Math.max(dLeft,dRight);
  }
}

// 前序遍历 ---- 非递归
let preOrder = function(root){
  if(!root) return [];
  let stack = [] , result = [];
  while(true){
    while(root){
      result.push(root.val);
      stack.push(root.right);
      root = root.left;
    }
    if(stack.length === 0) break;
    root = stack.pop();
  }
  return result;
}

// 中序遍历 ---- 非递归
let inOrder = function(root){
  if(!root) return [];
  let stack = [] , result = [];

  while(true){
    while(root){
      stack.push(root);
      root = root.left;
    }
    if(stack.length === 0) break;
    root = stack.pop();
    result.push(root.val);
    if(root.right) root = root.right;
  }
}

