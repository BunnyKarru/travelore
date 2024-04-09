import {configureStore} from '@reduxjs/toolkit'
import counterslice from './CountrySlice';

const store = configureStore({
    reducer : {
        dataupdatar : counterslice

    }
}

);

export default store ;