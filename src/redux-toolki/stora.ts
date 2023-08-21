import { configureStore } from '@reduxjs/toolkit';
import stateSlice from './Slice';


const store = configureStore({
  reducer: {
    detalle: stateSlice,
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
