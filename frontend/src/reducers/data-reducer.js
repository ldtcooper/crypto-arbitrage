import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchArbitrage } from '../utils/helpers';

const initialState = {
    current: [],
    historical: [],
    dates: ['3/16/22', '3/17/22', '3/18/22']
};

const mockData = [
    { exchange: 'Binance', rate: 42737.32 },
    { exchange: 'FTX', rate: 42750.92 },
    { exchange: 'Coinbase', rate: 42736.33 },
    { exchange: 'Kraken', rate: 42745.3 },
    { exchange: 'Huobei Global', rate: 42743 },
];

export const getArbitrage = createAsyncThunk(
    'data/fetchArbitrage',
    async (body) => {
        const resp = await fetchArbitrage(body);
        return resp.rates;
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // placeholders for our data fetching actions
        getCurrentData: (state) => {
            state.current = mockData;
        },
        getHistoricalData: (state) => state,
        getAvailableDates: (state) => state,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArbitrage.fulfilled, (state, action) => {
                state.current = action.payload;
            })
            .addCase(getArbitrage.rejected, (state) => {
                state.current = [];
            })
    },
});

export const { getCurrentData, getHistoricalData } = dataSlice.actions;

export const selectDates = () => (state) => {
    return state.data.dates
};

export const selectCurrentData = () => (state) => {
    return state.data.current;
}

export default dataSlice.reducer;
