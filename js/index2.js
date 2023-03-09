
let btnAdd = document.getElementById("btn-add");
let btnUp = document.getElementById("btn-update");
let btnDel = document.getElementById("btn-delete");

let divAdd = document.getElementById("div-add");
let divUp = document.getElementById("div-update");
let divDel = document.getElementById("div-delete");



//click
btnAdd.addEventListener("click", function (e) {
    divAdd.classList.toggle("hidden");
})

btnUp.addEventListener("click", function (e) {
    divUp.classList.toggle("hidden");
})

btnDel.addEventListener("click", function (e) {
    divDel.classList.toggle("hidden");
})


//hover
btnAdd.addEventListener("mouseenter", function (e) {
    btnAdd.classList.toggle("btn-ghost");
})
btnAdd.addEventListener("mouseleave", function (e) {
    btnAdd.classList.toggle("btn-ghost");
})

btnUp.addEventListener("mouseenter", function (e) {
    btnUp.classList.toggle("btn-ghost");
})
btnUp.addEventListener("mouseleave", function (e) {
    btnUp.classList.toggle("btn-ghost");
})

btnDel.addEventListener("mouseenter", function (e) {
    btnDel.classList.toggle("btn-ghost");
})
btnDel.addEventListener("mouseleave", function (e) {
    btnDel.classList.toggle("btn-ghost");
})