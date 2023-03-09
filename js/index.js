let add = document.getElementById("add");
let remove = document.getElementById("remove");
let update = document.getElementById("update");
let utama = document.getElementById("utama");
let tampung = document.getElementById("content");
let btnSave = document.createElement("button");
let divAdd = document.createElement("div");
btnSave.setAttribute("id", "btn-save-update");
btnSave.innerText = "Save";
divAdd.setAttribute("id", "div-add");
divAdd.innerText = "INI NANTI JADI HALAMAN UPDATE";
divAdd.append(btnSave);
tampung.append(divAdd);




function showAdd()
{

}

add.addEventListener("click", function(e){
   showAdd();
   utama.classList.add("hidden");
})

btnSave.addEventListener("click", function(e){
    utama.classList.remove("hidden");
    divAdd.classList.add("hidden");
})