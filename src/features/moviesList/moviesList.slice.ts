import {createSlice} from "@reduxjs/toolkit";
import { MoviesInDataBase, GenresStatObject } from "types";

const numberOfYears = Number(new Date().getFullYear()) - 1900;
const startYearRange = Array(numberOfYears).fill(0).map((_, i) => i+1901);
const endYearRange = Array(numberOfYears).fill(0).map((_, i) => i+1901);

export interface MoviesListState {
    listOfMovies: Promise<MoviesInDataBase[]> | MoviesInDataBase[];
    genresStats: Promise<GenresStatObject> | GenresStatObject;
    numberOfBattlesPossible: [8, 16, 32, 64, 128, 256];
    possibleGenres: ['Various','Drama','Action','Crime','Adventure','Comedy','Biography','Thriller','Romance','Mystery','Animation','Fantasy','Sci-Fi','Family','Music','War','History','Horror','Short','Sport','Documentary','Musical','Western','Adult'];
    possibleRating: string[];//['PG','PG-13','R','PG-13 and younger','PG-13 and older','All'];
    possibleStartYear: number[];
    possibleEndYear: number[];
}

const initialState: MoviesListState = {
    listOfMovies:  [],
    genresStats: {},
    numberOfBattlesPossible: [8, 16, 32, 64, 128, 256],
    possibleGenres: ['Various','Drama','Action','Crime','Adventure','Comedy','Biography','Thriller','Romance','Mystery','Animation','Fantasy','Sci-Fi','Family','Music','War','History','Horror','Short','Sport','Documentary','Musical','Western','Adult'],
    possibleRating: ['PG','PG-13','R','PG-13 and younger','PG-13 and older','All'],
    possibleStartYear: startYearRange,
    possibleEndYear: endYearRange,
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