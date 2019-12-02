// N叉树的遍历


// 前序遍历 ---- 递归
var preOrder = function(root) {
  const result = [];
  if(!root) return [];
  recursion(root);
  return result;

  function recursion(root){
    if(!root) return ;
    array.push(root.val);
    for(var i = 0 ; i < root.children.lenth ; i++){
      recursion(root.children[i]);
    }
}
}

// 后序遍历 ---- 递归
var postorder = function(root) {
  if(!root) return [];
  const result = [];
  recursion(root);
  function recursion(root){
      if(!root) return ;
      for(var i = 0 ; i < root.children.length ; i++){
          recursion(root.children[i]);
      }
      result.push(root.val);
  }
  return result;
};