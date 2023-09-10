

const classForActivePage = `bg-black text-white`

export const buferRenderPagination = (limit, maxCard, currentPage, paginationConteiner) => {
    const maxPage = Math.ceil(maxCard / limit)

    const pagination = paginationLogic(currentPage, maxPage) // отримуємо масив із номерацією сторінок

    const paginationHTML = renderPaginationHTML(pagination, currentPage)
    paginationConteiner.innerHTML = paginationHTML

    return
}

function renderPaginationHTML (pagination, currentPage) {
    return pagination.map(el => {
       return`
            <li class="flex items-center justify-center text-lg font-extralight w-[33px] h-[33px] rounded-full border border-black cursor-pointer  ${el === currentPage && classForActivePage}">
                <span>
                    ${el}
                </span>
            </li>`
    }).join("")
}

function paginationLogic (currentPage, maxPage) {
    if (currentPage <= 3 ) return [1,2,3,4,5,'...', maxPage]
    if (maxPage - 3 <= currentPage) return [1, '...', maxPage -4, maxPage -3, maxPage -2 , maxPage -1 ,maxPage]
    if (currentPage > 3) return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, '...', maxPage]
    // if (currentPage > 3 && currentPage > maxPage / 2 ) return [1, '...', currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
}