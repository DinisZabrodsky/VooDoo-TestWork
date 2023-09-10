const basket = document.querySelector('#basket')
const body = document.querySelector('body')
const basketModal = document.querySelector('#basketModal')
const basketModalClose = document.querySelector('#basketModalClose')


basket.addEventListener('click', handleOpenModal)
basketModalClose.addEventListener('click', handleCloseModal)

function handleOpenModal () {
    basketModal.classList.remove('hidden')
    body.classList.add('overflow-hidden')

}

function handleCloseModal () {
    basketModal.classList.add('hidden')
    body.classList.remove('overflow-hidden')
}