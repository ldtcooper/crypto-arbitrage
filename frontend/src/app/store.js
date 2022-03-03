import { configureStore } from '@reduxjs/toolkit';
import { dataSlice } from '../reducers';
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
