//操作给定的二叉树，将其变换为源二叉树的镜像。

function Mirror(root){
  if(root){
    var temp = new Node();
    temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.right);
    Mirror(root.left);
  }
}