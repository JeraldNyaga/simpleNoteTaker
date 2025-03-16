class ToDoList {
    constructor(taskHeading, toDoName, dueDate, priority) {
        this.taskHeading = taskHeading;
        this.toDoName = toDoName;
        this.dueDate = dueDate;
        this.priority = priority
    }
    editToDoName(newToDo) {
        this.toDoName = newToDo;
        return this.toDoName;
    }
    editToDoPriority(newPriority) {
        this.priority = newPriority;
        return this.priority;
    }
    editTodueDate(newDueDate) {
        this.dueDate = newDueDate;
        return this.dueDate;
    }
    editToDotaskHeading(newTaskHeading) {
        this.taskHeading = newtaskHeading;
        return this.taskHeading;
    }
}

const form = document.querySelector(".form")
const toDoActivities = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskHeading = document.querySelector("#taskHeading").value
    const taskName = document.querySelector("#taskName").value
    const taskPriority = document.querySelector("#taskPriority").value
    const dueDate = document.querySelector("#dueDate").value
    const chores = Object.assign({}, new ToDoList(taskHeading, taskName, dueDate, taskPriority));
    allActivity(chores)
    addToDoItem(toDoActivities)

    console.log(toDoActivities)
    form.reset();
})

function addToDoItem(toDoArray) {
    const lastChild = [...toDoArray]
    const displayContDiv = document.querySelector(".displayToDo")
    const displayDiv = document.createElement("div")
    displayContDiv.appendChild(displayDiv)
    const taskH2 = document.createElement("h2")
    const taskSpan = document.createElement("span")
    const dueDate = document.createElement("span")
    const deleteBtn = document.createElement("button")
    const breakLine = document.createElement("br")

    deleteBtn.addEventListener("click", deleteTodo)

    taskH2.textContent = lastChild[0].taskHeading
    deleteBtn.textContent = ` Delete`
    taskSpan.textContent = lastChild[0].toDoName
    dueDate.textContent = lastChild[0].dueDate
    displayDiv.appendChild(taskH2)

    displayDiv.appendChild(document.createTextNode("The task is: "));
    displayDiv.appendChild(taskSpan)
    displayDiv.appendChild(breakLine)
    displayDiv.appendChild(document.createTextNode("The due date is: "));
    displayDiv.appendChild(dueDate)
    displayDiv.appendChild(deleteBtn)
}

function deleteTodo(e) {
    // Implement Logic
    e.target.parentNode.remove()
    //delete toDoObject;
}

function allActivity(toDoObject) {
    toDoActivities.unshift(toDoObject)
}

function sortActivityPriority(toDoActivitiesArray) {

}


