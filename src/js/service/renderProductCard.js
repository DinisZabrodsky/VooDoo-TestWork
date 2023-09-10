import { getData } from "../api/getDataAxios.js"


export async function buferRenderCard (limit, page, cardConteiner ) {
    const {products} = await getData(limit, page) 

    const htmlForReflection = generateHtmlCard(products)
    cardConteiner.innerHTML = htmlForReflection

    return
}

function generateHtmlCard (data) {
    return data.map((card) => {
        return`
        <li class="mb-[48px] w-[342px] xl:w-[300px]">
            <div class="relative block h-[300px] w-[342px] border-2 border-black rounded overflow-hidden xl:w-[300px]">
                <img src=${card.images[0] ? card.images[0].src : ""} alt=${card.title}>
                <span class="absolute top-3 left-3 bg-black rounded text-white px-[8px] py-[2px] uppercase text-sm">used</span>
            </div>

            <div class="my-[12px]">
                <div class="flex justify-between">
                    <h4 class="font-bold text-sm">${card.title}</h4>
                    <p class="font-bold text-sm">Condition</p>
                </div>
                <div class="flex justify-between">
                    <p class="font-bold text-sm">000 KR.</p>
                    <p class="font-bold text-sm">Slightly used</p>
                </div>
            </div>
        
            <button class=" bg-black rounded text-white w-full h-[42px] cursor-pointer">
                ADD TO CART
            </button>
        </li>`
    }).join("")
}