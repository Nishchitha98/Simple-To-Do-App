function addTask(){

    let input = document.getElementById("taskInput");
    let task = input.value;

    if(task === ""){
        return;
    }

    let li = document.createElement("li");
    li.innerText = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function(){
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
}