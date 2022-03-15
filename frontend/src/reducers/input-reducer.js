import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    exchanges: {},
};

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        updateInput: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        clearInputs: (state) => {
            state = initialState;
        }
    },
});

export const { updateInput, clearInputs } = inputSlice.actions;

export const selectInputVal = (name) => (state) => state.input[name];

export default inputSlice.reducer;
