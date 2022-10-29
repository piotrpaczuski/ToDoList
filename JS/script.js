{
    const tasks = [
        {
            name: "Nauczyć się FrontEnd'u",
            done: false,
        },
        {
            name: "Zrobić pracę domową!",
            done: true,
        },
    ];

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

    const onFormButton = () => {

        const input = document.querySelector(".js-newTask");
        const button = document.querySelector(".js-button");
        button.addEventListener("click", (event) => {
            event.preventDefault();
            addNewTask();
            input.value = "";
            input.focus();
        });
    }

    const eventButtons = () => {
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
            <button class="section__buttonAdd js-done">${task.done ? "✔" : ""}</button>
            <li${task.done ? " class=\"section__listItem section__done\"" : " class=\"section__listItem\"" }>
                ${task.name}
            </li>
            <button class="section__buttonRemove js-remove">🗑</button>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        eventButtons();
    };

    const init = () => {
        onFormButton();
    };

    init();
}