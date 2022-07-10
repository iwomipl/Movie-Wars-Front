import {createSlice} from "@reduxjs/toolkit";
import { MoviesInDataBase } from "types";


interface BattlesSlice {
    numberOfBattles: number;
    currentBattle: MoviesInDataBase[];
}

const initialState: BattlesSlice = {
    numberOfBattles: 15,
    currentBattle: [],
};

interface SetNumberOfBattles {
    payload: number;
}

interface SetCurrentBattle {
    payload: MoviesInDataBase[];
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
    },
});

export const {setNumberOfBattles} = battlesSlice.actions;