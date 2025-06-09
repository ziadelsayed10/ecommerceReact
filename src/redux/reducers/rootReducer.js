import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { brandReducer } from "./BrandReducer";
import { subCategoryReducer } from "./subCategoryReducer";
import { productReducer } from "./productReducer";
import { AuthReducer } from "./AuthReducer";
import { ReviewReducer } from "./ReviewReducer";
import { AddToWishListReducer } from "./WishListReducer";

export default combineReducers({
    allCategory: categoryReducer,
    allBrand:brandReducer,
    subCategory:subCategoryReducer,
    allProduct:productReducer,
    allAuth:AuthReducer,
    ReviewReducer:ReviewReducer,
    AddToWishListReducer:AddToWishListReducer,
})