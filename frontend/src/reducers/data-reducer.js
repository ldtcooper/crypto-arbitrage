import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    current: [],
    historical: []
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // placeholders for our data fetching actions
        getCurrentData: (state) => state,
        getHistoricalData: (state) => state,
    },
});

export const { getCurrentData, getHistoricalData } = dataSlice.actions;

export default dataSlice.reducer;
