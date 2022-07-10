import {createSlice} from "@reduxjs/toolkit";
import { MoviesInDataBase } from "types";


export interface MoviesListState {
    listOfMovies: Promise<MoviesInDataBase[]> | MoviesInDataBase[];
}

const initialState: MoviesListState = {
    listOfMovies:  [],//[(async()=>await fetchForMoviesList(50))()][0],
};

interface SetMoviesList {
    payload: MoviesInDataBase[];
}

export const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState,
    reducers: {
        setMoviesList: (state, action: SetMoviesList)=>{
            state.listOfMovies = action.payload;
        },
    },
});

export const {setMoviesList} = moviesListSlice.actions;