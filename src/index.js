document.addEventListener("DOMContentLoaded", () => {
    class ToDoList {
        static uniqueId = 1;
        constructor(taskHeading, toDoName, dueDate, priority) {
            this.id = this.generateId();
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
            this.taskHeading = newTaskHeading;
            return this.taskHeading;
        }
        generateId() {
            return ToDoList.uniqueId++;
        }
    }

    const form = document.querySelector(".form")
    const toDoActivities = [];
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("dueDate").setAttribute("min", today);

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
        displayDiv.classList.add("divSpacing")
        displayContDiv.appendChild(displayDiv)
        displayContDiv.classList.remove("none")
        const taskH2 = document.createElement("h2")
        const taskSpan = document.createElement("span")
        const dueDate = document.createElement("span")
        const priority = document.createElement("p")
        const deleteBtn = document.createElement("button")
        const breakLine = document.createElement("br")

        deleteBtn.addEventListener("click", deleteTodo)

        taskH2.textContent = lastChild[0].taskHeading
        deleteBtn.textContent = ` Delete`
        taskSpan.textContent = lastChild[0].toDoName
        dueDate.textContent = lastChild[0].dueDate
        priority.textContent = `The priority level is: ${lastChild[0].priority}`
        priorityItem(lastChild[0].priority, displayDiv)
        displayDiv.appendChild(taskH2)

        displayDiv.appendChild(document.createTextNode("The task is: "));
        displayDiv.appendChild(taskSpan)
        displayDiv.appendChild(breakLine)
        displayDiv.appendChild(document.createTextNode("The due date is: "));
        displayDiv.appendChild(dueDate)
        displayDiv.appendChild(priority)
        displayDiv.appendChild(deleteBtn)
    }

    function deleteTodo(e) {
        // Implement more Logic
        e.target.parentNode.remove()
        //delete toDoObject;
    }

    function allActivity(toDoObject) {
        toDoActivities.unshift(toDoObject)
    }

    // Work in progress
    function sortActivityPriority(toDoActivitiesArray) {
        // Implementing
    }

    // Work in progress
    function editToDoTask(taskName) {
        if (toDoActivities.length > 1) {
            const editButton = document.createElement("button")
        }
        return ToDoList.editToDoTask(taskName);
    }
    function priorityItem(priorityVal, div) {
        const priorityIndex = parseInt(priorityVal);
        console.log(priorityIndex)
        if (priorityIndex >= 4) {
            div.classList.add("critical")
        } else if (priorityIndex == 3) {
            div.classList.add("medium")
        } else {
            div.classList.add("low")
        }
    }
})