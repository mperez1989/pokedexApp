import { createSlice } from '@reduxjs/toolkit';

export const traineSlice = createSlice({
    name: 'trainer',
    initialState: "",
    reducers: {
        setTrainerSlice: (state, action) => action.payload

    }
})

export const { setTrainerSlice } = traineSlice.actions;

export default traineSlice.reducer;
