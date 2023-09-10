import { buferRenderPagination } from "./src/js/service/renderPaginationPage.js"
import { buferRenderCard } from "./src/js/service/renderProductCard.js"




const cardConteiner = document.querySelector('#cards')
const paginationConteiner = document.querySelector('#pagination')
paginationConteiner.addEventListener('click', handlePagination)


const screenVP = screen.width // Розширення ерану
let currentPage = 1
let limit = 6
let maxCard = 461 // по ідеї total повинен приходити разом із запитом, але тут його нема,  
let maxPage = null


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
