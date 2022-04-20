
//  Функция осуществляет проверку наличия элемента в списке покупок и в случае наличия, 
//  увеличивает пареметро кл-во (quantity). Работет это так:
//  1. В функцию посылается уже имеющийся список покупок и элемент который стоит на очереди на добавление
//  2. В переменную existingBagItem записываем результат выполнения функции find() которая иттерирует список 
//  с покупками и сравнивает id у тех элементов что уже добавлены и id того элемента что стоит на очереди на 
//  добавление
//  3. Затем пишем условие, если нашлись два одинаковых id тем самым переменная existingBagItem является true,
//  то тогда воспроизвести список покупок bagItems и в зависимости от id либо увеличить показатель кол-ва этого элемента
//  либо просто добавить его
//  4. Если условие не выполняется, то добавить элемент в список



export const addItemToBag = (bagItems, bagItemToAdd, prodQty=Number(1))=> {
    const existingBagItem = bagItems.find(bagItem => bagItem._id === bagItemToAdd._id);
        if(existingBagItem){
            return bagItems.map(
                bagItem => bagItem._id === bagItemToAdd._id 
                        ? {...bagItem, quantity: Number(bagItem.available) > bagItem.quantity
                            && Number(bagItem.available) > 0 ? bagItem.quantity + prodQty : bagItem.quantity}
                        : bagItem)}
        return [...bagItems,  {...bagItemToAdd,  quantity:prodQty }]
}


export const removeItemFromBag = (bagItems, bagItemToRemove)=> {

    const existingBagItem = bagItems.find(bagItem => bagItem._id === bagItemToRemove._id);

        if(existingBagItem.quantity === 1){
            return bagItems.filter(
                bagItem => bagItem._id !== bagItemToRemove._id)}

        return bagItems.map(
                bagItem => bagItem._id === bagItemToRemove._id 
                        ? {...bagItem, quantity: bagItem.quantity - 1}
                        : bagItem)};
