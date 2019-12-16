
function hailstone(n){
  let length = 1;
  while(1<n){
    (n%2)? n = n*3+1 : n = n/2;
    length++;
  }
  return length;
}

console.log(hailstone(42));

// 并不能证明这个算法有穷性 ------------ 程序 不等于 算法 （死循环~无穷性）