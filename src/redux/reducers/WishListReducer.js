import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, USER_All_WISHLIST } from "../types";

const initialState = { 
    addToWishList: [],
    removeFromWishList: [],
    userAllWishList: [],
     loading: true
     };
export const AddToWishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        addToWishList: action.payload,
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removeFromWishList: action.payload,
      };
    case USER_All_WISHLIST:
      return {
        ...state,
        userAllWishList: action.payload,
      };

    default:
      return state;
  }
};
