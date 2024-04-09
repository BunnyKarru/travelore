import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countrydata: [],
};

export const counterslice = createSlice({
    name: 'dataupdater',
    initialState,
    reducers: {
        addCountry: (state, action) => {
            state.countrydata.push(action.payload);
        },
    },
});

export const { addCountry } = counterslice.actions;


export default counterslice.reducer;
