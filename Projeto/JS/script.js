//função que adiciona a tarefa
function addTask(){

    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle){
        //clona template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //adcionar titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover as classes desnecessária

        newTask.classList.remove("template")
        newTask.classList.remove("hide");

        //adcionar tarefa na lista
        const list = document.querySelector("#task-list");


        list.appendChild(newTask);

        //limpar texto
        document.querySelector("#task-title").value="";

        //remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        });



    }


}

//função remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}

//função adcionar tarefa
function completeTask(task){
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
}

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    e.preventDefault();

    addTask();
});