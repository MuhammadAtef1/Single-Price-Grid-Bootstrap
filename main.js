let btn = document.querySelector(".dark-mode-btn");
let html = document.querySelector("html");
let ctr = 0 ;

let container = document.querySelector(".container");
console.log(container);

btn.addEventListener("click",function() {
    if (ctr % 2 == 0) {
        html.setAttribute("data-bs-theme","dark");
        container.style.backgroundColor = "rgba(0, 0, 0, 0.363)";
    }
    else if (ctr%2 != 0) {
        html.removeAttribute("data-bs-theme");
        container.style.backgroundColor = "hsl(204, 43%, 93%)";
    }
    ++ctr;
})