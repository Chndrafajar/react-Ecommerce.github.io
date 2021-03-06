import Item1 from "../Img/shop/1.jpg";
import Item2 from "../Img/shop/2.jpg";
import Item3 from "../Img/shop/3.jpg";
import Item4 from "../Img/shop/4.jpg";
import Item5 from "../Img/shop/5.jpg";
import Item6 from "../Img/shop/6.jpg";
import Item7 from "../Img/shop/7.jpg";
import Item8 from "../Img/shop/8.jpg";
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from "../actions/actionType/cart-action";

const initState = {
  items: [
    { id: 1, title: "Clothes Fashion", price: 110, img: Item1 },
    { id: 2, title: "Shoes Fashion", price: 80, img: Item2 },
    { id: 3, title: "bag Fashion", price: 120, img: Item3 },
    { id: 4, title: "Shoes Fashion", price: 260, img: Item4 },
    { id: 5, title: "Hat Fashion", price: 160, img: Item5 },
    { id: 6, title: "Jacket Fashion", price: 90, img: Item6 },
    { id: 7, title: "Shoes Fashion", price: 90, img: Item7 },
    { id: 8, title: "Jacket Fashion", price: 90, img: Item8 },
  ],
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }
  return state;
};

export default cartReducer;
