import { renderCard } from "./src/js/service/renderProductCard.js"




const cardConteiner = document.querySelector('#cards')


const screenVP = screen.width // Розширення ерану
let currentPage = 1
let limit = 6
let maxPage = null
let firstStart = true

homePageLogic()

async function homePageLogic () {
    quantityElement()
    console.log(limit)
    if(firstStart) {
        await renderCard(limit, 1) 
        return firstStart = false
    }
}

function quantityElement () {
    if (screenVP < 1280){
        return limit = 6
    }   else {
        return limit = 12
    }
}
