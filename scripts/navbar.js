
const menuButton = document.querySelector(".menu-button")
const closeButton = document.querySelector(".close-button")
const modal = document.querySelector(".modal")

const menuButtonDeploy = () => {
    menuButton.classList.toggle("menu-button--inactive")
    modal.classList.toggle("modal--inactive")
    modal.classList.toggle("modal--active")
    closeButton.classList.toggle("close-button--inactive")
}

const menuButtonClose = () => {
    closeButton.classList.toggle("close-button--inactive")
    modal.classList.toggle("modal--inactive")
    modal.classList.toggle("modal--active")
    menuButton.classList.toggle("menu-button--inactive")
}

menuButton.addEventListener("click", menuButtonDeploy)
closeButton.addEventListener("click", menuButtonClose)

