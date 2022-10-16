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
    genresStats: {
        Action: 99,
        Adventure: 95,
        Animation: 38,
        Biography: 65,
        Comedy: 71,
        Crime: 98,
        Documentary: 8,
        Drama: 290,
        Family: 20,
        Fantasy: 32,
        History: 16,
        Horror: 10,
        Music: 18,
        Musical: 8,
        Mystery: 41,
        Romance: 43,
        'Sci-Fi': 29,
        Short: 9,
        Sport: 9,
        Thriller: 58,
        Various: 256,
        War: 17,
    },
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