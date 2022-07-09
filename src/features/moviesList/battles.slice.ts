import {createSlice} from "@reduxjs/toolkit";


interface BattlesSlice {
    numberOfBattles: number;
}

const initialState: BattlesSlice = {
    numberOfBattles: 15,
};

interface SetNumberOfBattles {
    payload: number;
}

export const battlesSlice = createSlice({
    name: 'battles',
    initialState,
    reducers: {
        setNumberOfBattles: (state, action: SetNumberOfBattles)=>{
            state.numberOfBattles = action.payload;
        },
    },
});

export const {setNumberOfBattles} = battlesSlice.actions;