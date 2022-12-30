const loginFrom = document.querySelector(".login-form form");
const loginBtn = document.querySelector(".login-form button");
const greetingH1 = document.querySelector("#greeting");

const loginSubmitHandler = (e) => {
  //   console.dir(loginInput.value);
  const username = loginInput.value;
  if (username === "") {
    alert("값을 입력해주세요");
  } else if (username.length > 15) {
    alert("15자 이내로 작성해주세요");
  } else {
    greetingH1.innerText = `${username}님, 환영합니다`;
    loginFrom.classList.add("hidden");
    greetingH1.classList.remove("hidden");
  }
  console.log();
};
loginFrom.addEventListener("submit", loginSubmitHandler);
