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

        const button = document.querySelector(".js-button");
        button.addEventListener("click", (event) => {
            event.preventDefault();
            addNewTask();
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
            <li${task.done ? " class=\"content__done\"" : " class=\"\"" }>
            <button class="js-done">Zrobione</button>
                ${task.name}
            <button class="js-remove">Usuń zadanie</button>
            </li>
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