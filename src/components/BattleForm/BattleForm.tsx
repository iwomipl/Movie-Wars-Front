import React, {FormEvent} from "react";

import './BattleForm.css'
import {Genres} from "../Genres/Genres";
import {NumberOfBattles} from "../NumberOfBattles/NumberOfBattles";

interface Props {
    submitFunction: (e: FormEvent<HTMLFormElement>) => void;
}

export const BattleForm = (props: Props) => {
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