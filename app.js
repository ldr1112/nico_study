const h1 = document.querySelector("div.hello:first-child h1")

// toggle은 한번 한번 클릭으로 함수를 받아드림(버튼이랑 비슷함), 코드도 간편함
function handTitleClick() {
  h1.classList.toggle("clicked")
}

h1.addEventListener("click", handTitleClick)