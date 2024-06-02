

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    like: JSON.parse(localStorage.getItem("Like") || "[]") as string[]
}

const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers:{
        likeProduct: (state, action) => {
            localStorage.setItem("Like", JSON.stringify(state.like))
            state.like.unshift(action.payload)
        }
    }
})

export const {likeProduct} = likeSlice.actions;
const likeReducer = likeSlice.reducer;

export default likeReducer;
