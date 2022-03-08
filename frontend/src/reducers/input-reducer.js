import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        updateInput: (state, { id, input }) => {
            state[id] = input;
        },
        clearInputs: (state) => {
            state = initialState;
        }
    },
});

export const { updateInput, clearInputs } = inputSlice.actions;

export default inputSlice.reducer;
