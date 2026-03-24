function start() {
    console.log("привет");
    alert("111111")
}
const task = document.getElementById("task-list")
const bt = document.getElementById("add-btn")
const IT = document.getElementById("imput-task")
//bt.onclick = start

bt.addEventListener("click", addT)

function addT() {
    const TT = IT.value;
    if (TT) {
        const NT = document.createElement("li")
        NT.classList.add("taskp")
        NT.classList.add("HayL")
        NT.addEventListener('click', (ev) => {
            ev.currentTarget.classList.toggle('complet');
        });
        NT.innerHTML = `
    <span class="task-content">${TT}</span>
    <div class="task-a">
        <button class="task-bth" onclick="this.parentNode.parentNode.remove()"><span
                class="material-symbols-outlined">
                delete_forever
            </span>
        </button>
    </div>`
        task.append(NT)
        IT.value = ""
    }
    

}
