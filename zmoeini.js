// 1- What would be the output of following code ?

function mul(x) {
  return function (y) {
    return function (z) {
      return function (w) {
        return function (p) {
          return x * y * z * w * p;
        };
      };
    };
  };
}
console.log(mul(2)(3)(4)(5)(6));

/*
1- 720
2- undefined
3- Reference Error
4- Type Error
*/

//2- What are the differences between variables created using let, var or const?

//3- What are the benefits of using spread syntax and how is it different from rest syntax?

//4- render a page contain a list of numbers in browser
