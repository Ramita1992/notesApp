const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

createBtn.addEventListener("click", ()=> {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable" , "true");
    img.src = "images/delet.png"; 
    notesContainer.appendChild(inputbox).appendChild(img);
})
saveData();

notesContainer.addEventListener("click" , function (e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();  
        saveData();
    }
    
})

function saveData(){
    localStorage.setItem("notes" , notesContainer.innerHTML);
}