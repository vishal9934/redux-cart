import { createSlice } from "@reduxjs/toolkit";
import ProductData from "./ProductData";

const initialState = { 
     cart : [],
     items : ProductData,
     totalQuantity : 0,
     totalPrize : 0,
 };


export const SliceCart=createSlice({
    name:"cart",
    initialState,
    reducers:{

    addToCart : (state,action)=>{
        let find = state.cart.findIndex((item)=>item.id===action.payload.id)
        if(find>=0){
            state.cart[find].quantity+=1;
        }
        else{
            state.cart.push(action.payload);
        }
    },
    getCartTotal: (state) => {
        let { totalQuantity, totalPrize } = state.cart.reduce(
          (cartTotal, cartItem) => {
            console.log("carttotal", cartTotal);
            console.log("cartitem", cartItem);
            const { price, quantity } = cartItem;
            console.log(price, quantity);
            const itemTotal = price * quantity;
            cartTotal.totalPrize += itemTotal;
            cartTotal.totalQuantity += quantity;
            return cartTotal;
          },
          {
            totalPrize: 0,
            totalQuantity: 0,
          }
        );
        state.totalPrize = parseInt(totalPrize.toFixed(2));
        state.totalQuantity = totalQuantity;
      },
      removeItem: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      },
      increaseItemQuantity: (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      },
      decreaseItemQuantity: (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      },
    },
   
  
})

export const {addToCart,getCartTotal,removeItem,increaseItemQuantity,decreaseItemQuantity} = SliceCart.actions
export default SliceCart.reducer;