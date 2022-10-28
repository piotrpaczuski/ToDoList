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
    ]

    const addNewTask = () => {
        const newTask = document.querySelector(".js-newTask").value.trim();
        if (newTask === "") {
            return;
        }

        tasks.push({
            name: newTask,
        })

        render();
    }

    const removeTask = (task) => {
        tasks.pop({
            name: task,
        })

        render();
    }

    const onFormButton = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", (event) => {
            event.preventDefault();
            addNewTask();
        })

        
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks){
            htmlString += `
            <li${task.done ? " class=\"content__done\"" : " class=\"\"" }>
                ${task.name}
            </li>
            <button>Usuń zadanie</button>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    }

    const init = () => {
        onFormButton();
    }

    init();
}