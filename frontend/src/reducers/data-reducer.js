import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    current: [],
    historical: [],
    dates: ['3/16/22', '3/17/22', '3/18/22']
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // placeholders for our data fetching actions
        getCurrentData: (state) => state,
        getHistoricalData: (state) => state,
        getAvailableDates: (state) => state,
    },
});

export const { getCurrentData, getHistoricalData } = dataSlice.actions;

export const selectDates = () => (state) => {
    return state.data.dates
};

export default dataSlice.reducer;
