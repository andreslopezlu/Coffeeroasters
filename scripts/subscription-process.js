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

const processPlaceholder = document.querySelector(".process-placeholder")
const typePlaceholder = document.querySelector(".type-placeholder")
const quantityPlaceholder = document.querySelector(".quantity-placeholder")
const grindPlaceholder = document.querySelector(".grind-placeholder")
const deliverPlaceholder = document.querySelector(".deliver-placeholder")

const process = {
    "capsule" : "Capsule",
    "filter" : "Filter",
    "espresso" : "Espresso"
}
const type = {
    "single origin" : "Single Origin",
    "decaf" : "Decaf",
    "blended" : "Blended"
}
const quantity = {
    "250g" : "250g",
    "500g" : "500g",
    "1000g" : "1000g"
}
const grind = {
    "wholebean" : "Wholebean",
    "filter" : "Filter",
    "cafetiére" : "Cafetiére"
}
const deliver = {
    "every week" : "Every week",
    "every 2 weeks" : "Every 2 weeks",
    "every month" : "Every month"
}

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

const selected = (dict, key) => {
    return dict[key]
}

const clickProcess = (event) => {
    deselectItems(processItems)
    const element = event.target.closest("div")
    const title = element.querySelector("p").innerText
    processPlaceholder.innerText = selected(process, title.toLowerCase())
    if (processPlaceholder.classList.contains("process-placeholder-hidden")) {
        processPlaceholder.classList.toggle("process-placeholder-hidden")
    }
    element.classList.toggle("selected")
    applyStyles(processItems)
}
const clickType = (event) => {
    deselectItems(typeItems)
    const element = event.target.closest("div")
    const title = element.querySelector("p").innerText
    typePlaceholder.innerText = selected(type, title.toLowerCase())
    if (typePlaceholder.classList.contains("type-placeholder-hidden")) {
        typePlaceholder.classList.toggle("type-placeholder-hidden")
    }
    element.classList.toggle("selected")
    applyStyles(typeItems)
}
const clickQuantity = (event) => {
    deselectItems(quantityItems)
    const element = event.target.closest("div")
    const title = element.querySelector("p").innerText
    quantityPlaceholder.innerText = selected(quantity, title.toLowerCase())
    if (quantityPlaceholder.classList.contains("quantity-placeholder-hidden")) {
        quantityPlaceholder.classList.toggle("quantity-placeholder-hidden")
    }
    element.classList.toggle("selected")
    applyStyles(quantityItems)
}
const clickGrind = (event) => {
    deselectItems(grindItems)
    const element = event.target.closest("div")
    const title = element.querySelector("p").innerText
    grindPlaceholder.innerText = selected(grind, title.toLowerCase())
    if (grindPlaceholder.classList.contains("grind-placeholder-hidden")) {
        grindPlaceholder.classList.toggle("grind-placeholder-hidden")
    }
    element.classList.toggle("selected")
    applyStyles(grindItems)
}
const clickDeliver = (event) => {
    deselectItems(deliverItems)
    const element = event.target.closest("div")
    const title = element.querySelector("p").innerText
    deliverPlaceholder.innerText = selected(deliver, title.toLowerCase())
    if (deliverPlaceholder.classList.contains("deliver-placeholder-hidden")) {
        deliverPlaceholder.classList.toggle("deliver-placeholder-hidden")
    }
    element.classList.toggle("selected")
    applyStyles(deliverItems)
}

processList.addEventListener("click", clickProcess)
typeList.addEventListener("click", clickType)
quantityList.addEventListener("click", clickQuantity)
grindList.addEventListener("click", clickGrind)
deliverList.addEventListener("click", clickDeliver)