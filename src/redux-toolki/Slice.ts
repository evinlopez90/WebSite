import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  detail: boolean;
  id: number;
  value: boolean
}

const initialState: State = {
  detail: false,
  id: 0,
  value: false

};

const stateSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    setDetail: {
     reducer: (state, actions: PayloadAction<boolean>) => {
        state.detail = actions.payload
        },
        prepare: (valor: boolean) => {
            return { payload: valor };
          },
    },
    setId: {
        reducer: (state, actions: PayloadAction<number>) => {
           state.id = actions.payload
           },
           prepare: (valor: number) => {
               return { payload: valor };
             },
       },
       setTheme: {
        reducer: (state, actions: PayloadAction<boolean>) => {
           state.value = actions.payload
           },
           prepare: (valor: boolean) => {
               return { payload: valor };
             },
       },

  },
});

 export const { setDetail, setId, setTheme} = stateSlice.actions;
export default stateSlice.reducer;
