// 题目1-二叉树重建
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

function reConstructBinaryTree(pre,vin){
  if(pre.length === 0) return null;
  if(pre.length === 1) {
    return new Tree(pre[0]);
  }
  const value = pre[0];
  const index = vin.indexOf(value);
  const vinLeft = vin.slice(0,index);
  const vinRight = vin.slice(index+1);
  const preLeft = pre.slice(1,index+1);
  const preRight = pre.slice(index+1);
  const node = new Tree(value);
  node.left = reConstructBinaryTree(preLeft,vinLeft);
  node.right = reConstructBinaryTree(preRight,vinRight);
  return node;
}