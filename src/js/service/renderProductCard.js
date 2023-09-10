import { getData } from "../api/getDataAxios.js"


export async function renderCard (limit, page ) {
    const data = await getData(limit, page) 
    console.log(data)
    return

}

function generateHtmlCard (data) {
    return data.map()
}