import {createSlice} from "@reduxjs/toolkit";
import { MoviesInDataBase, GenresStatObject } from "types";

export interface MoviesListState {
    listOfMovies: Promise<MoviesInDataBase[]> | MoviesInDataBase[];
    genresStats: Promise<GenresStatObject> | GenresStatObject;
    numberOfBattlesPossible: [8, 16, 32, 64, 128, 256];
}

const initialState: MoviesListState = {
    listOfMovies:  [],
    genresStats: {},
    numberOfBattlesPossible: [8, 16, 32, 64, 128, 256],
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