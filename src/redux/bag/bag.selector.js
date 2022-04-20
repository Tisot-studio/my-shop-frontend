import {createSelector} from 'reselect';

const selectBag = state => state.bag;


// селектор для отображения товаров в корзине (выпадающем пеню)
export const selectBagItems = createSelector(
    [selectBag],
    bag => bag.bagItems
);

// // селектор для подсчета товаров
// export const selectBagItemsCount = createSelector(
//     [selectBagItems],
//     bagItems => bagItems.reduce(
//         (accumQuantity, bagItem) => accumQuantity + bagItem.quantity, 0)
// );


// селектор для отображения/скрытия выпадающего меню
export const selectBagHidden = createSelector(
    [selectBag],
    bag => bag.hidden
);

export const selectBagTotal = createSelector(
    [selectBagItems],
    bagItems => bagItems.reduce(
        (accumQuantity, bagItem) => accumQuantity + bagItem.quantity * bagItem.price, 0)
)