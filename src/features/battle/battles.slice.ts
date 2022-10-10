import {createSlice} from "@reduxjs/toolkit";
import { MoviesInDataBase } from "types";


export interface BattlesState {
    numberOfBattles: number;
    currentListOfMovies: MoviesInDataBase[];
    futureListOfMovies: MoviesInDataBase[];
    currentBattle: MoviesInDataBase[];
    additionalVariable: {
        genre: string;
        rating?: string;
        startYear?: number;
        endYear?: number;
        number?: number;
    };
    roundNumber: number;
    showForm: boolean;
}

const initialState: BattlesState = {
    numberOfBattles: 15,
    currentListOfMovies: [],
    futureListOfMovies: [],
    currentBattle: [],
    additionalVariable: {
        genre: 'Various',
        rating: 'All',
        startYear: 2000,
        endYear: Number(new Date().getFullYear()),
        number: 256,
    },
    roundNumber: 1,
    showForm: true,
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
        genre: string;
        rating?: string;
        startYear?: number;
        endYear?: number;
        number?: number;
    };
}
interface SetRoundNumber {
    payload: number;
}
interface SetShowForm {
    payload: boolean;
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
            state.additionalVariable = {genre: 'Various', rating: 'All', number: 256,};
        },
        setRoundNumber: (state, action: SetRoundNumber)=>{
            state.roundNumber = action.payload;
        },
        setShowForm: (state, action: SetShowForm)=>{
            state.showForm = action.payload;
        },
    },
});

export const {setNumberOfBattles, setCurrentBattle, setCurrentListOfMovies, resetFutureListOfMovies, addMovieToFutureListOfMovies, setAdditionalVariable, resetAdditionalVariable, setRoundNumber, setShowForm} = battlesSlice.actions;