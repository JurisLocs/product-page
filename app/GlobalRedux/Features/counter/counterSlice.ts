'use client';
import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    value : number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice ({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {state.value += 1},
        decrement: (state) => {if(state.value > 0){state.value -=1} },
        incrementByAmount: (state,action) => {
            state.value += action.payload;
        },
        changeQuantity: (state, action) => {
            state.value = action.payload
        }
        
    }
})

export const {increment, decrement, changeQuantity} = counterSlice.actions

export default counterSlice.reducer;