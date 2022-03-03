import { configureStore } from '@reduxjs/toolkit';
import { dataSlice, inputSlice } from '../reducers';
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    input: inputSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
