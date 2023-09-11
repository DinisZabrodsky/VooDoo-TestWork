import { basketList } from './src/js/helpers/basketListCreate.js'
import './src/js/helpers/basketModal.js'
import { renderCardInBaketBufer } from './src/js/service/renderCardInBasket.js'

import { buferRenderPagination } from "./src/js/service/renderPaginationPage.js"
import { buferRenderCard } from "./src/js/service/renderProductCard.js"




const cardConteiner = document.querySelector('#cards')
const paginationConteiner = document.querySelector('#pagination')
const basketModalList = document.querySelector('#basketModalList')
cardConteiner.addEventListener('click', handleAddGoods)
paginationConteiner.addEventListener('click', handlePagination)


const screenVP = screen.width // Розширення ерану
let currentPage = 1
let limit = 6
let maxCard = 461 // по ідеї total повинен приходити разом із запитом, але тут його нема,  
let maxPage = null
const basket = []


homePageLogic()

async function homePageLogic () {
    
    quantityElement()
    buferRenderCard(limit, currentPage, cardConteiner)
    buferRenderPagination(limit, maxCard, currentPage, paginationConteiner) // Не до кінця розумію як повинні відображатись сторніки пагінації за 3 сторінкою, але загальну логіку передав 
    
}


function quantityElement () {
    if (screenVP < 768){
        return limit = 6
    } else if ( 768 <= screenVP && screenVP < 1280) {
        return limit = 12
    } else {
        return limit = 24
    }
}

function handlePagination (event) {

    const li = event.target.closest("li")
    if (!li) return

    currentPage = Number(li.children[0].innerText)
    // console.log(Number(li.textContent))
    homePageLogic()
}

function handleAddGoods (event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    basketList(event.target.parentNode, basket)
    console.log(basket)
    renderCardInBaketBufer(basket, basketModalList)
}
