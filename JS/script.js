{
    let tasks = [];
    let hideDoneTasks = false;

    const addNewTask = (newTask) => {
        tasks = [
            ...tasks,
            { name: newTask },
        ];

        render();
    };

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ]

        render();
    };

    const toggleDoneTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            { ...tasks[taskIndex], done: !tasks[taskIndex].done },
            ...tasks.slice(taskIndex + 1),
        ]

        render();
    }

    const toggleHidenDoneTasks = () => {
        hideDoneTasks = !hideDoneTasks;

        render();
    }

    const markAllTasksDone = () => {
        tasks = tasks.map((tasks) => ({
            ...tasks,
            done: true,
        }))

        render();
    }

    const bindNewTaskButton = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", (event) => {
            event.preventDefault();
            const newTask = document.querySelector(".js-newTask");

            if (newTask.value.trim()) {
                addNewTask(newTask.value.trim());
                newTask.value = "";
                newTask.focus();
            }
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

    const renderButtons = () => {
        let htmlString = "";

        if (tasks.length) {
            htmlString += `
            <button class="section__buttons js-hideDoneTasks">${hideDoneTasks ? "Poka??" : "Ukryj"} uko??czone</button>
            <button class="section__buttons js-doneAllTasks"${tasks.every(({ done }) => done) ? "disabled" : ""}>Uko??cz wszystkie</button>
            `;
        }
        else {
            htmlString += "";
        }

        document.querySelector(".js-buttons").innerHTML = htmlString;
    }

    const renderListItem = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="section__listItem${task.done && hideDoneTasks ? " section__listItem-hidden" : ""}">
                <button class="section__buttonAdd js-done">${task.done ? "???" : ""}</button>
                <span class="${task.done ? "section__done" : ""}">
                    ${task.name}
                </span>
                <button class="section__buttonRemove js-remove">????</button>
            </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;
    }

    const bindButtonsEvents = () => {
        const doneAllTasksButton = document.querySelector(".js-doneAllTasks");
        const hideDoneTasksButton = document.querySelector(".js-hideDoneTasks");

        if (doneAllTasksButton && hideDoneTasksButton) {
            doneAllTasksButton.addEventListener("click", (event) => {
                event.preventDefault();
                markAllTasksDone();
            })

            hideDoneTasksButton.addEventListener("click", (event) => {
                event.preventDefault();
                toggleHidenDoneTasks();
            })
        }
    };

    const render = () => {
        renderButtons();
        renderListItem();

        bindListButtonsEvents();
        bindButtonsEvents();
    };

    const init = () => {
        bindNewTaskButton();
    };

    init();
}