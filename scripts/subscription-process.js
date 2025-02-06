const processList = document.querySelector(".process__list")
const processItems = document.querySelectorAll(".process__item")

const typeList = document.querySelector(".types__list")
const typeItems = document.querySelectorAll(".type__item")

const quantityList = document.querySelector(".quantity__list")
const quantityItems = document.querySelectorAll(".quantity__item")

const grindList = document.querySelector(".grind__list")
const grindItems = document.querySelectorAll(".grind__item")

const deliverList = document.querySelector(".deliver__list")
const deliverItems = document.querySelectorAll(".deliver__item")

const deselectItems = (itemsList) => {
    for (let item of itemsList) {
        if (item.classList.contains("selected")) {
            item.classList.toggle("selected")
        }
    }
}

const applyStyles = (itemsList) => {
    for (let item of itemsList) {
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
    deselectItems(processItems)
    const element = event.target.closest("div")
    element.classList.toggle("selected")
    applyStyles(processItems)
}
const clickType = (event) => {
    deselectItems(typeItems)
    const element = event.target.closest("div")
    element.classList.toggle("selected")
    applyStyles(typeItems)
}
const clickQuantity = (event) => {
    deselectItems(quantityItems)
    const element = event.target.closest("div")
    element.classList.toggle("selected")
    applyStyles(quantityItems)
}
const clickGrind = (event) => {
    deselectItems(grindItems)
    const element = event.target.closest("div")
    element.classList.toggle("selected")
    applyStyles(grindItems)
}
const clickDeliver = (event) => {
    deselectItems(deliverItems)
    const element = event.target.closest("div")
    element.classList.toggle("selected")
    applyStyles(deliverItems)
}

processList.addEventListener("click", clickProcess)
typeList.addEventListener("click", clickType)
quantityList.addEventListener("click", clickQuantity)
grindList.addEventListener("click", clickGrind)
deliverList.addEventListener("click", clickDeliver)