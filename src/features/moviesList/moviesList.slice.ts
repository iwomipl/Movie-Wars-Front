import {createSlice} from "@reduxjs/toolkit";
import { MoviesInDataBase, GenresStatObject } from "types";

export interface MoviesListState {
    listOfMovies: Promise<MoviesInDataBase[]> | MoviesInDataBase[];
    genresStats: Promise<GenresStatObject> | GenresStatObject;
}

const initialState: MoviesListState = {
    listOfMovies:  [],//[(async()=>await fetchForMoviesList(50))()][0],
    genresStats: {},
};

interface SetMoviesList {
    payload: MoviesInDataBase[];
}

interface SetGenresStats {
    payload: GenresStatObject;
}

export const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState,
    reducers: {
        setMoviesList: (state, action: SetMoviesList)=>{
            state.listOfMovies = action.payload;
        },
        setGenresStats: (state, action: SetGenresStats)=>{
            state.genresStats = action.payload;
        }
    },
});

export const {setMoviesList, setGenresStats} = moviesListSlice.actions;