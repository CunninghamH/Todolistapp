const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");

const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
    addItem();
})

function addItem(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");
    const text = document.createElement("p");

    divParent.className = "item";
    text.textContent = input.value;
    checkIcon.className = "fa-solid fa-square-check";
    checkIcon.style.color = "lightgrey";
    checkIcon.addEventListener("click", function(){
        if(checkIcon.style.color == "lightgrey"){
        checkIcon.style.color = "limegreen";} else{
            checkIcon.style.color = "lightgrey";
        }
    })
    divChild.appendChild(checkIcon);

    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.color = "darkgrey";
    trashIcon.addEventListener("click", function(){
        divParent.remove();
    })

divChild.appendChild(trashIcon);
toDoItems.appendChild(divParent);
divParent.appendChild(text);
divParent.appendChild(divChild);
input.value = '';
}