import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //mutating the state here
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // console.log("redux first");

      // console.log(state);
      // state=[];
      // console.log(state);

      if (state.items) {
        console.log(state.items); //normal console wont work in redux
        console.log(current(state)); //use current state from redux-toolkit
        state.items.length = 0;
      }

      return { items: [] };

      //RTK - either Mutate existing state or return a new state
      //state.items.length=0 or return { items: [] };
    },
  },
});

console.log(cartSlice);
// sample object
// cartSlice={
//     actions:{
//         addItem,
//         removeItem,
//         clearCart
//     },
//     reducer
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// clearCart: (state) => {
//   console.log("redux first");

//   console.log(state);
//   state=[];
//   console.log(state);
// state.items.push("pizza"

// what the difference between two different type of state initailization?i am using redux toolkit

// ---------------------------------

// In Redux Toolkit, the way you initialize or manipulate the state can have significant implications for how your application behaves. Let's break down the differences between two common approaches for state manipulation, using your example:

// 1. **Directly Reassigning the State:**

//    ```javascript
//    state = [];
//    console.log(state);
//    ```

//    Here, you are trying to reassign the `state` variable to a new array. However, this is not how Redux Toolkit (or Redux in general) expects state updates to be handled. In Redux Toolkit, the `state` parameter in a reducer function is immutable, meaning you should not reassign it directly. Instead, you should mutate it immutably (which Redux Toolkit's `createSlice` allows using Immer under the hood).

//    The problem with `state = []` is that it does not correctly update the state in the Redux store. It only changes the local `state` variable within the reducer function, which does not persist outside of that function.

// 2. **Using `state` as an Object and Mutating It:**

//    ```javascript
//    state.items = [];
//    console.log(state);
//    state.items.push("pizza");
//    ```

//    This approach uses the built-in Immer library that comes with Redux Toolkit. Immer allows you to write "mutating" code that appears to change the state directly but is actually producing a new immutable state behind the scenes.

//    In this case, `state.items = []` correctly updates the `items` property of the state object. The subsequent `state.items.push("pizza")` operation will also work correctly because `state` is still referencing the same state object, and you are only mutating its properties.

// ### Correct Approach in Redux Toolkit

// Given your scenario, here is how you should correctly clear the cart and then add an item to it:

// ```javascript
// clearCart: (state) => {
//   console.log("redux first");

//   console.log(state);
//   state.items = []; // Correct way to clear items in the cart
//   console.log(state);
//   state.items.push("pizza"); // Adding an item to the cleared cart
// }
// ```

// ### Key Points:

// - **State Reassignment:** Avoid directly reassigning the `state` variable inside a reducer function.
// - **State Mutation:** Utilize Immer (built into Redux Toolkit) to safely "mutate" the state, which will result in an immutable update.

// By following these practices, you'll ensure that your state updates are properly handled by Redux Toolkit, leading to predictable and reliable state management in your application.
