async function f1() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => console.log("완료"), 1000);
  });

  alert(result);

  return 1;
}

f1();

async function getDataFromAPI() {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
}
