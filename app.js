const title = document.querySelector("div.hello:first-child h1")

//클릭 이벤트 (함수를 사용하여 클릭으로 이벤트를 발생하게 할 수 있음)
function handTitleClick() {
  title.style.color = "red"
}

title.addEventListener("click", handTitleClick)
