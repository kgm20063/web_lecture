/*
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("p1 객체가 작업이 성공적으로 완료됨"), 3000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("p2 객체 작업이 성공적으로 완료됨"), 4000);
});

// const p3 = new Promise((reject) => {
//   setTimeout(() => reject(new Error("p3 객체 작업 중 에러 발생"), 1000));
// });

console.time("test");

Promise.all([p1, p2]).then(([resolve1, resolve2]) => {
  console.log(resolve1, resolve2);
  console.timeEnd("test");
});
*/

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("결과값"), 1000);
//   //   setTimeout(() => reject(new Error("에러 발생!"), 2000));
// })
//   .finally(() => alert("promise가 준비됨"))
//   .then((result) => alert(result));
