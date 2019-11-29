// 题目 给定二叉树，求所有左叶子节点之和;
// 给出 四种解法


 /*
  * function TreeNode(val) {
  *     this.val = val;
  *     this.left = this.right = null;
  * }
  */
 /**
  * @param {TreeNode} root
  * @return {number}
  */

  // 递归 DFS
  var sumOfLeftLeaves1 = function(root){
    let res = [0];
    recursion(root,false,res);
    return res[0];
  }

  const recursion = function(node,isLeft,res){
    if( !node ) return;
    if( !node.left && !node.right && isLeft )
    {
      res[0] = res[0] + node.val;
    }
    if( node.left ) recursion(node.left,true,res);
    if( node.right ) recursion(node.right,false,res);
  }

  // 迭代 DFS
  var sumOfLeftLeaves2 = function(root){
    const stack = [];
    stack.push(root);
    let sum = 0;
    while( stack.length > 0 )
    {
      let current = stack.pop();
      if ( !current.left  && !current.right && current.isLeft )
      {
        sum = sum + current.val;
      } 
      if ( current.right ) stack.push(current.right);
      if ( current.left ) {
        current.left.isLeft = true;
        stack.push(current.left);
      }
    }
    return sum;
  }

  