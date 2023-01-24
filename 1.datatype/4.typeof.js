// typeof 값
// 값의 타입을 알려줌

console.log(typeof 1); // number
console.log(typeof "1"); //string
console.log();

// 사칙연산보다 typeof 연산이 우선순위가 높아서 이러한 결과가 나옴.
// typeof >> 사칙연산
console.log(typeof "hello" + "world"); // stringworld
console.log(typeof 2 - 10); // NaN => Not a Number.
console.log();
