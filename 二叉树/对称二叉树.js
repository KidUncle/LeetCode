// 题目
// 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

function isSymmetrical(pRoot){
  return isSymmetricalTree(proot,proot);
}

function isSymmetricalTree(node1,node2){
  if(!node1 && !node2) return true;
  if(!node1 || !node2) return false;
  if(node1.val !== node2.val) return false;
  return isSymmetricalTree(node1.right,node2.left) && isSymmetricalTree(node1.left,node2.right);
}