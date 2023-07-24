// 웹 브라우전에서는 window 객체가 전역 객체
console.log(this === global);

a = 37;
console.log(global.a);

this.b = "MDN";
console.log(global.b);
console.log(b);
