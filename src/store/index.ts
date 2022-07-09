import {configureStore} from "@reduxjs/toolkit";
import {moviesListSlice} from "../features/moviesList/moviesList.slice";
import {battlesSlice} from "../features/moviesList/battles.slice";



export const store = configureStore({
    reducer: {
        moviesList: moviesListSlice.reducer,
        battles: battlesSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>