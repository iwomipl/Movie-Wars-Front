import React, {FormEvent, useEffect} from "react";
import {useDispatch} from "react-redux";
import {Genres} from "../Genres/Genres";
import {NumberOfBattles} from "../NumberOfBattles/NumberOfBattles";
import {resetAdditionalVariable, setNumberOfBattles} from "../../features/battle/battles.slice";

import './BattleForm.css'

interface Props {
    submitFunction: (e: FormEvent<HTMLFormElement>) => void;
}

export const BattleForm = (props: Props) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(resetAdditionalVariable());
        dispatch(setNumberOfBattles(8*2-1));
    }, [])

    return <>
        <h3>How many of best movies do You want to compare?</h3>
        <form onSubmit={(e) => props.submitFunction(e)} className="battle-form">
            <label>You Can choose Genres</label>
            <Genres/>
            <label>Choose number of movies to battle</label>
            <NumberOfBattles/>
            <button id="start-battles">Start!</button>
        </form>
    </>
}