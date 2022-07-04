import {configureStore} from "@reduxjs/toolkit";
import {moviesListSlice} from "../features/moviesList/moviesList.slice";



export const store = configureStore({
    reducer: {
        moviesList: moviesListSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>