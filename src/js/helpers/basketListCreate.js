


export function basketList (element, basket) {
    let goodsID = element.dataset.id

    const findGoods = Number( basket.findIndex(element => element.id === goodsID ))
    if (findGoods !== -1) {
        basket[findGoods].value += 1 
        return
    }

    const goods = {
        id: goodsID,
        img: element.children[0].children[0].src,
        name: element.children[1].children[0].children[0].textContent,
        price: element.children[1].children[1].children[0].textContent.split(' ')[0],
        value: 1
    }

    basket.push(goods)
}