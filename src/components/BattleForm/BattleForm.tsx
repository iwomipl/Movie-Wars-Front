import React, {ChangeEvent, FormEvent, useState} from "react";
import {CommonInput} from "../common/CommonInput";
import {setNumberOfBattles} from "../../features/battle/battles.slice";
import {useDispatch} from "react-redux";

import './BattleForm.css'
import {Genres} from "../Genres/Genres";

interface Props {
    submitFunction: (e: FormEvent<HTMLFormElement>) => void;
}

export const BattleForm = (props: Props) => {
    const dispatch = useDispatch();
    const [numberOfMovies, setNumberOfMovies] = useState([8, 16, 32, 64, 128, 256])

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setNumberOfBattles(Number(e.target.value)));
    }

    return <>
        <h3>How many of best movies do You want to compare?</h3>
        <form onSubmit={(e) => props.submitFunction(e)} >
            <label>You Can choose Genres</label>
            <div>
            <Genres/>
            </div>
            <label>Choose number of movies to battle</label>
            <div className="battles">
            {numberOfMovies.map(moviesNumber => < div key={moviesNumber.toString()}>
                <CommonInput
                    text={`${moviesNumber} Best Movies`}
                    type="radio"
                    value={moviesNumber * 2 - 1}
                    name="battles"
                    className="option-input radio"
                    function={changeValue}
                    disabled={false}
                /><br/>
            </div>)}
            </div>
            <button id="start-battles">Start!</button>
        </form>
    </>
}