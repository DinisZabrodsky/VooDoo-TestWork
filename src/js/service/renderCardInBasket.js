

export function renderCardInBaketBufer (basket, basketModalList) {
    const totalConteiner = basketModalList.nextElementSibling.lastElementChild

    const bakedCardHTML = createBakedCardHTML(basket)
    basketModalList.innerHTML = bakedCardHTML
    totalConteiner.textContent = `${totalBakedCard(basket)} KR.`
    // Не думаю, що тут підійде insertAdjacentHTML(), адже тут доводиться працювати від масиву об'єктів, котрий повинен полетіти на бек.
    // У випадк якщо доведеться видаляти картку то всеріно все перемальовувати
    // Також, на скільки знаю, innerHTML швидший за insertAdjacentHTML(), аджке олбота із DOM досить ресурсоємка
    // Крім того використання insertAdjacentHTML() змусило б писати кучу коду.
}

function createBakedCardHTML (basket) {
    return basket.map(card => {
        return `
        <li data-id=${card.id} class="flex gap-[18px] justify-between ">
        <img  class="block rounded border-white w-[74px] h-[74px]"  src=${card.img} alt=${card.name}>

        <div class="space-y-1 flex-1 font-bold text-sm">
            <p>${card.name}</p>
            <p>${card.price} KR.</p>

            <div class="flex space-x-2"> 
                <span data-value="decrement" class="cursor-pointer">-</span>
                <p>${card.value}</p>
                <span data-value="increment" class="cursor-pointer">+</span>
            </div>
        </div>
        <img  data-value ="delete" class="block w-[24px] h-[24px] cursor-pointer" src="./src/img/delete-bin-6-line.svg" alt="delete tovar">
    </li>
        `}).join("")
}

function totalBakedCard (basket) {
    let total = 0
    basket.forEach(element => total +=  Number(element.price) * Number(element.value))
    return total
}