import React, {ChangeEvent, FormEvent} from "react";
import {CommonInput} from "../common/CommonInput";
import {setNumberOfBattles} from "../../features/battle/battles.slice";
import {useDispatch} from "react-redux";


interface Props {
    submitFunction:(e: FormEvent<HTMLFormElement>)=> void;
}

export const BattleForm = (props:  Props)=>{
    const dispatch = useDispatch();

    const changeValue= (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setNumberOfBattles(Number(e.target.value)));
    }

    return <form onSubmit={(e)=>props.submitFunction(e)} id="battles">
        <CommonInput
            text="15 Battles"
            type="radio"
            value={15}
            name="battles"
            className="battleInput"
            function={changeValue}
        /><br/>
        <CommonInput
            text="31 Battles"
            type="radio"
            value={31}
            name="battles"
            className="battleInput"
            function={changeValue}
        /><br/>
        <CommonInput
            text="63 Battles"
            type="radio"
            value={63}
            name="battles"
            className="battleInput"
            function={changeValue}
        /><br/>
        <CommonInput
            text="127 Battles"
            type="radio"
            value={127}
            name="battles"
            className="battleInput"
            function={changeValue}
        /><br/>
        <CommonInput
            text="255 Battles"
            type="radio"
            value={255}
            name="battles"
            className="battleInput"
            function={changeValue}
        /><br/>
        <CommonInput
            text="511 Battles"
            type="radio"
            value={511}
            name="battles"
            className="battleInput"
            function={changeValue}
        /><br/>
        <button>Start!</button>
    </form>
}