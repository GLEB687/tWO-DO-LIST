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
            priority: 'HayL'
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


    NT.innerHTML = `
    <span class="task-content">${FFF.title}</span>
    <div class="task-a">
        <button class="task-bth bthC">
            <span class="material-symbols-outlined">
            bubble 
            </span>
        </button>
        <button class="task-bth bthE">
            <span class="material-symbols-outlined">
            Edit
            </span>
        </button>
        <button class="task-bth bthD">
            <span class="material-symbols-outlined">
            delete_forever  
            </span>
        </button>
    </div>`

    NT
        .querySelector('button.bthD')
        .addEventListener('click', (ev) => {
            ev.currentTarget.parentNode.parentNode.remove();
            tap = tap.filter(x => x.title != FFF.title);
            taskStorage.save(tap)
        })

    NT.addEventListener('click', (ev) => {
        ev.currentTarget.classList.toggle('complet');
        FFF.isCompleted = !FFF.isCompleted
        taskStorage.save(tap);
    });

    NT
        .querySelector('button.bthC')
        .addEventListener('click', (ev) => {
            ev.preventDefault();
            ev.stopPropagation()

            const el = ev.currentTarget.parentNode.parentNode;
            switch (FFF.priority) {
                case 'HayL':
                    FFF.priority = 'HayM'
                    el.classList.remove('HayL');
                    el.classList.add('HayM');
                    break
                case 'HayM':
                    FFF.priority = 'HayP'
                    el.classList.remove('HayM');
                    el.classList.add('HayP');
                    break
                default:
                    FFF.priority = 'HayL'
                    el.classList.remove('HayP');
                    el.classList.add('HayL');
                    break
            }
            taskStorage.save(tap);

        })

    task.append(NT)

    NT
    .querySelector('button.bthE')
    .addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation()
        const NewTi = prompt('Изменить задачу', FFF.title);
        if (NewTi.trim()) {
        FFF.title = NewTi 
        ev.currentTarget
        .parentNode
        .parentNode
        .querySelector('span.task-content')
        .innerText = NewTi
        }
    })
}
