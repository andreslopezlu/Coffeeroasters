
const processList = document.querySelector(".process__list")

const processItems = () => {
    const items = document.querySelectorAll(".process__item")
    for (let item of items) {
        if (item.classList.contains("selected")) {
            item.classList.toggle("selected")
        }
    }
}

const applyStyles = () => {
    const items = document.querySelectorAll(".process__item")
    for (let item of items) {
        const title = item.childNodes[1]
        const description = item.childNodes[3]
        if (item.classList.contains("selected")) {
            title.style.color = "#FFF"
            description.style.color = "#FFF"
            item.style.backgroundColor = "#0E8784"
        } else {
            title.style.color = ""
            description.style.color = ""
            item.style.backgroundColor = ""
        }
    }
}

const clickProcess = (event) => {
    processItems()
    const element = event.target.closest("div")
    element.classList.toggle("selected")
    applyStyles()
}

processList.addEventListener("click", clickProcess)