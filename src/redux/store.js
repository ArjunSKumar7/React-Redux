import { configureStore } from '@reduxjs/toolkit';
import carReducer from "./cart"
export const store = configureStore({
    reducer: {
        cart:carReducer,
    },
});