// 상수 constant

const PI = 3.14; // 변하지 않음. 그리고 상수 이름은 대문자로 작성. 두 단어 이상은 _ 사용
let radius;
function calculatearea() {
  return PI * radius;
}

function printArea() {
  return `반지름의 길이: ${radius}, 넓이: ${calculatearea()}`;
}

radius = 5;
console.log(printArea());
