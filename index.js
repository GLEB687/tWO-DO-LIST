const task = document.getElementById("task-list")
const bt = document.getElementById("add-btn")
const IT = document.getElementById("imput-task")
bt.addEventListener("click", addT)

let tap = [
    {
        title: 'ничего не делать',
        priority: 'HayM',
        isCompleted: false,
    },
    {
        title: 'купить куртку',
        priority: ' HayL',
        isCompleted: false,
    },
];

function start() {
    console.log("привет");
    alert("111111")
}

tap.forEach( x => createTaskElement(x))

document.addEventListener('keydown',
    (ev) => {
        if (ev.key === 'Enter') {
            addT()
        }
    })

function addT() {
    const TT = IT.value;
    if (TT) {

        IT.value = ""
    }
}

function createTaskElement(FFF) {
    const NT = document.createElement("li")
    NT.classList.add("taskp")
    NT.classList.add("HayL")
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
