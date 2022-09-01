import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {CommonInput} from "../common/CommonInput";
import {setNumberOfBattles} from "../../features/battle/battles.slice";
import {useDispatch, useSelector} from "react-redux";

import './BattleForm.css'
import {Genres} from "../Genres/Genres";
import {RootState} from "../../store";

interface Props {
    submitFunction: (e: FormEvent<HTMLFormElement>) => void;
}

export const BattleForm = (props: Props) => {
    const dispatch = useDispatch();
    const {additionalVariable} = useSelector((store: RootState) => store.battles);
    const [numberOfMovies, setNumberOfMovies] = useState([8, 16, 32, 64, 128, 256]);

    useEffect(()=>{

    }, []);

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
                    disabled={Number(additionalVariable.number) >7 && moviesNumber > Number(additionalVariable.number)}
                /><br/>
            </div>)}
            </div>
            <button id="start-battles">Start!</button>
        </form>
    </>
}