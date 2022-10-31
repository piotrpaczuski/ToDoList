{
    const tasks = [];

    const addNewTask = () => {
        const newTask = document.querySelector(".js-newTask").value.trim();
        if (newTask === "") {
            return;
        }

        tasks.push({
            name: newTask,
        })

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleDoneTask = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindNewTaskButton = () => {

        const newTask = document.querySelector(".js-newTask");
        const button = document.querySelector(".js-button");
        button.addEventListener("click", (event) => {
            event.preventDefault();
            addNewTask();
            newTask.value = "";
            newTask.focus();
        });
    }

    const bindListButtonsEvents = () => {
        const doneButton = document.querySelectorAll(".js-done");
        doneButton.forEach((doneButton, taskIndex) => {
            doneButton.addEventListener("click", (event) => {
                event.preventDefault();
                toggleDoneTask(taskIndex);
            })
        })

        const removeButton = document.querySelectorAll(".js-remove");
        removeButton.forEach((removeButton, taskIndex) => {
            removeButton.addEventListener("click", (event) => {
                event.preventDefault();
                removeTask(taskIndex);
            });
        });

    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks){
            htmlString += `
            <li class="section__listItem">
                <button class="section__buttonAdd js-done">${task.done ? "✔" : ""}</button>
                <span class="${task.done ? "section__done" : "" }">
                    ${task.name}
                </span>
                <button class="section__buttonRemove js-remove">🗑</button>
            </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindListButtonsEvents();
    };

    const init = () => {
        bindNewTaskButton();
    };

    init();
}