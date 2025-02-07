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

const hiddeButton1 = document.querySelector(".hide-button1")
const hiddeButton2 = document.querySelector(".hide-button2")
const hiddeButton3 = document.querySelector(".hide-button3")
const hiddeButton4 = document.querySelector(".hide-button4")
const hiddeButton5 = document.querySelector(".hide-button5")

const processContainer = document.getElementById("process");
const typeContainer = document.getElementById("type");
const quantityContainer = document.getElementById("quantity");
const grindContainer = document.getElementById("grind");
const deliverContainer = document.getElementById("deliver");

const createPlanButton = document.querySelector(".create-plan__button")

const subscriptionConfirmationContainer = document.querySelector(".subscription-confirmation")

const processConfirmation = document.querySelector(".process-confirmation")
const typeConfirmation = document.querySelector(".type-confirmation")
const quantityConfirmation = document.querySelector(".quantity-confirmation")
const grindConfirmation = document.querySelector(".grind-confirmation")
const deliverConfirmation = document.querySelector(".deliver-confirmation")

const main = document.querySelector("main")

const navbar = document.querySelector(".navbar")

const error = document.querySelector(".error")

const results = {
    "process": "no",
    "type": "no",
    "quantity": "no",
    "grind": "no",
    "deliver": "no"
}

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
    processConfirmation.innerText = selected(process, title.toLowerCase())
    if (processPlaceholder.classList.contains("process-placeholder-hidden")) {
        processPlaceholder.classList.toggle("process-placeholder-hidden")
    }
    element.classList.toggle("selected")
    applyStyles(processItems)
    const step = document.querySelectorAll(".steps-list li")[0].querySelectorAll("span")[1]
    if (!step.classList.contains("completed"))   {
        step.classList.toggle("completed")
    }
    processList.classList.toggle("item-hidden")
    typeList.classList.toggle("item-hidden")
    typeContainer.scrollIntoView()
    results["process"] = "ok"
}

const clickType = (event) => {
    deselectItems(typeItems)
    const element = event.target.closest("div")
    const title = element.querySelector("p").innerText
    typePlaceholder.innerText = selected(type, title.toLowerCase())
    typeConfirmation.innerText = selected(type, title.toLowerCase())
    if (typePlaceholder.classList.contains("type-placeholder-hidden")) {
        typePlaceholder.classList.toggle("type-placeholder-hidden")
    }
    element.classList.toggle("selected")
    applyStyles(typeItems)
    const step = document.querySelectorAll(".steps-list li")[1].querySelectorAll("span")[1]
    if (!step.classList.contains("completed")) {
        step.classList.toggle("completed")
    }
    typeList.classList.toggle("item-hidden")
    quantityList.classList.toggle("item-hidden")
    quantityContainer.scrollIntoView()
    results["type"] = "ok"
}

const clickQuantity = (event) => {
    deselectItems(quantityItems)
    const element = event.target.closest("div")
    const title = element.querySelector("p").innerText
    quantityPlaceholder.innerText = selected(quantity, title.toLowerCase())
    quantityConfirmation.innerText = selected(quantity, title.toLowerCase())
    if (quantityPlaceholder.classList.contains("quantity-placeholder-hidden")) {
        quantityPlaceholder.classList.toggle("quantity-placeholder-hidden")
    }
    element.classList.toggle("selected")
    applyStyles(quantityItems)
    const step = document.querySelectorAll(".steps-list li")[2].querySelectorAll("span")[1]
    if (!step.classList.contains("completed")) {
        step.classList.toggle("completed")
    }
    quantityList.classList.toggle("item-hidden")
    grindList.classList.toggle("item-hidden")
    grindContainer.scrollIntoView()
    results["quantity"] = "ok"
}

const clickGrind = (event) => {
    deselectItems(grindItems)
    const element = event.target.closest("div")
    const title = element.querySelector("p").innerText
    grindPlaceholder.innerText = selected(grind, title.toLowerCase())
    grindConfirmation.innerText = selected(grind, title.toLowerCase())
    if (grindPlaceholder.classList.contains("grind-placeholder-hidden")) {
        grindPlaceholder.classList.toggle("grind-placeholder-hidden")
    }
    element.classList.toggle("selected")
    applyStyles(grindItems)
    const step = document.querySelectorAll(".steps-list li")[3].querySelectorAll("span")[1]
    if (!step.classList.contains("completed")) {
        step.classList.toggle("completed")
    }
    grindList.classList.toggle("item-hidden")
    deliverList.classList.toggle("item-hidden")
    deliverContainer.scrollIntoView()
    results["grind"] = "ok"
}

const clickDeliver = (event) => {
    deselectItems(deliverItems)
    const element = event.target.closest("div")
    const title = element.querySelector("p").innerText
    deliverPlaceholder.innerText = selected(deliver, title.toLowerCase())
    deliverConfirmation.innerText = selected(deliver, title.toLowerCase())
    if (deliverPlaceholder.classList.contains("deliver-placeholder-hidden")) {
        deliverPlaceholder.classList.toggle("deliver-placeholder-hidden")
    }
    element.classList.toggle("selected")
    applyStyles(deliverItems)
    const step = document.querySelectorAll(".steps-list li")[4].querySelectorAll("span")[1]
    if (!step.classList.contains("completed")) {
        step.classList.toggle("completed")
    }
    deliverList.classList.toggle("item-hidden")
    results["deliver"] = "ok"
}

const processHiddeButton = (event) => {
    processList.classList.toggle("item-hidden")
    hiddeButton1.classList.toggle("invert-rotation")
}

const typeHiddeButton = (event) => {
    typeList.classList.toggle("item-hidden")
    hiddeButton2.classList.toggle("invert-rotation")
}

const quantityHiddeButton = (event) => {
    quantityList.classList.toggle("item-hidden")
    hiddeButton3.classList.toggle("invert-rotation")
}

const grindHiddeButton = (event) => {
    grindList.classList.toggle("item-hidden")
    hiddeButton4.classList.toggle("invert-rotation")
}

const deliverHiddeButton = (event) => {
    deliverList.classList.toggle("item-hidden")
    hiddeButton5.classList.toggle("invert-rotation")
}

const createPlan = () => {
    switch ("no") {
        case results["process"]:
            !error.classList.contains("error-hidden") ? null : error.classList.toggle("error-hidden")
            break;
        case results["type"]:
            !error.classList.contains("error-hidden") ? null : error.classList.toggle("error-hidden")
            break;
        case results["quantity"]:
            !error.classList.contains("error-hidden") ? null : error.classList.toggle("error-hidden")
            break;
        case results["grind"]:
            !error.classList.contains("error-hidden") ? null : error.classList.toggle("error-hidden")
            break;
        case results["deliver"]:
            !error.classList.contains("error-hidden") ? null : error.classList.toggle("error-hidden")
            break;
        default:
            if (main.classList.contains("blurred")){
                return
            }
            main.classList.toggle("blurred")
            navbar.scrollIntoView()
            subscriptionConfirmationContainer.classList.toggle("subscription-hidden")
            subscriptionConfirmationContainer.classList.toggle("subscription-modal-active")
    }
}

processList.addEventListener("click", clickProcess)
typeList.addEventListener("click", clickType)
quantityList.addEventListener("click", clickQuantity)
grindList.addEventListener("click", clickGrind)
deliverList.addEventListener("click", clickDeliver)

hiddeButton1.addEventListener("click", processHiddeButton)
hiddeButton2.addEventListener("click", typeHiddeButton)
hiddeButton3.addEventListener("click", quantityHiddeButton)
hiddeButton4.addEventListener("click", grindHiddeButton)
hiddeButton5.addEventListener("click", deliverHiddeButton)

createPlanButton.addEventListener("click", createPlan)