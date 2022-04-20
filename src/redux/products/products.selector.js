import { createSelector } from "reselect";

const selectProducts = state => state.productList;

export const selectProductsList = createSelector(
    [selectProducts],
    productList => productList.products
);

export const selectLoadingProducts = createSelector(
    [selectProducts],
    productList => productList.loading
);
