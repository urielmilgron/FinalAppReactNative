import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
  user: "userLogged",
  updatedAt: Date.now().toLocaleString(),
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Funciones de agg y eliminar
    addItem: (state, action) => {
      //Si el elemento existe, que sume la cantidad y no el elemento de nuevo
      const productDuplicated = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (productDuplicated) {
        const itemsUpdate = state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity;
            return item;
          }
          return;
        });
        const total = itemsUpdate.reduce(
          (acc, current) => (acc += current.price * current.quantity)
        );
        state = {
          ...state,
          items: itemsUpdate,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      } else {
        //Si no está en la lista de items, lo pusheamos al array
        state.items.push(action.payload);
        const total = state.items.reduce(
          (acc, current) => (acc += current.price * current.quantity)
        );
        state = {
          ...state,
          total,
          updatedAt: new Date().toLocaleString(),
        };
      }
     
    },
    removeItem: (state, action) => {

    }
  },
});

export const  { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer