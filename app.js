const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // 웹 미니 DB 만들기 localStorage
  localStorage.setItem("USERNAME_KEY", username);
  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem("USERNAME_KEY");

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(saveUsername)
}

// 웹 콘솔 창에서 localStorage 로 DB 저장, 추가, 삭제 등을 할 수 있음
// localStorage.setItem("username", "lee")
// localStorage.getItem("usename", "lee")
// localStorage.getItem("username")
// localStorage.removeItem("username")