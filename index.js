const KS = 'task-list'
const taskStorage = {
    save: (tasks) => {
        const tasksAsAStr = JSON.stringify(tasks);
        localStorage.setItem(KS, tasksAsAStr)
    },
    get: () => {
        const o = localStorage.getItem(KS)
        return JSON.parse(o)
    },
    init: () => {
        if (localStorage.getItem(KS) === null) {
            taskStorage.save([]);
        }
    }
}

taskStorage.init()
const task = document.getElementById("task-list")
const bt = document.getElementById("add-btn")
const IT = document.getElementById("imput-task")
bt.addEventListener("click", addT)

let tap = taskStorage.get();
tap.forEach(task => createTaskElement(task))

document.addEventListener('keydown',
    (ev) => {
        if (ev.key === 'Enter') {
            addT()
        }
    })

function addT() {
    const TT = IT.value;
    if (TT) {
        const Q = {
            title: TT,
            isCompleted: false,
            priority: 'HayM'
        }
        createTaskElement(Q)
        tap.push(Q)
        taskStorage.save(tap)

        IT.value = ""
    }
}

function createTaskElement(FFF) {
    const NT = document.createElement("li")
    NT.classList.add("taskp")
    NT.classList.add(FFF.priority)
    if (FFF.isCompleted) {
        NT.classList.add(`complet`)
    }

    NT.addEventListener('click', (ev) => {
        ev.currentTarget.classList.toggle('complet');
    });
    NT.innerHTML = `
    <span class="task-content">${FFF.title}</span>
    <div class="task-a">
        <button class="task-bth" onclick="this.parentNode.parentNode.remove()"><span
                class="material-symbols-outlined">
                delete_forever
            </span>
        </button>
    </div>`
    task.append(NT)
}