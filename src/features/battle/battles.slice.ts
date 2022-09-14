import {createSlice} from "@reduxjs/toolkit";
import { MoviesInDataBase } from "types";


export interface BattlesState {
    numberOfBattles: number;
    currentListOfMovies: MoviesInDataBase[];
    futureListOfMovies: MoviesInDataBase[];
    currentBattle: MoviesInDataBase[];
    additionalVariable: {
        name: string;
        number?: number;
    };
    roundNumber: number;
}

const initialState: BattlesState = {
    numberOfBattles: 15,
    currentListOfMovies: [],
    futureListOfMovies: [],
    currentBattle: [],
    additionalVariable: {
        name: 'Various',
        number: 256,
    },
    roundNumber: 1,
};

interface SetNumberOfBattles {
    payload: number;
}
interface SetCurrentListOfMovies {
    payload: MoviesInDataBase[];
}
interface AddMovieToFutureListOfMovies {
    payload: MoviesInDataBase;
}
interface SetCurrentBattle {
    payload: MoviesInDataBase[];
}
interface SetAdditionalVariable {
    payload: {
        name: string;
        number: number;
    };
}
interface SetRoundNumber {
    payload: number;
}


export const battlesSlice = createSlice({
    name: 'battles',
    initialState,
    reducers: {
        setNumberOfBattles: (state, action: SetNumberOfBattles)=>{
            state.numberOfBattles = action.payload;
        },
        setCurrentBattle: (state, action: SetCurrentBattle)=>{
            state.currentBattle = action.payload;
        },
        setCurrentListOfMovies: (state, action: SetCurrentListOfMovies)=>{
            state.currentListOfMovies = action.payload;
        },
        resetFutureListOfMovies: (state)=>{
            state.futureListOfMovies = [];
        },
        addMovieToFutureListOfMovies: (state, action: AddMovieToFutureListOfMovies)=>{
            state.futureListOfMovies = [...state.futureListOfMovies, action.payload];
        },
        setAdditionalVariable: (state, action: SetAdditionalVariable)=>{
            state.additionalVariable = action.payload;
        },
        resetAdditionalVariable: (state, action: SetAdditionalVariable)=>{
            state.additionalVariable = {name: 'Various', number: 256,};
        },
        setRoundNumber: (state, action: SetRoundNumber)=>{
            state.roundNumber = action.payload;
        },
    },
});

export const {setNumberOfBattles, setCurrentBattle, setCurrentListOfMovies, resetFutureListOfMovies, addMovieToFutureListOfMovies, setAdditionalVariable, resetAdditionalVariable, setRoundNumber} = battlesSlice.actions;