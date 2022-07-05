import React, { FormEvent} from "react";
import {CommonInput} from "../common/CommonInput";

interface Props {
    submitFunction:(e: FormEvent<HTMLFormElement>)=> Promise<void>;
}

export const BattleForm = (props:  Props)=>{


    return         <form onSubmit={props.submitFunction} id="battles">
        <CommonInput
            text="15 Battles"
            type="radio"
            value={15}
            name="battles"
            className="battleInput"
        /><br/>
        <CommonInput
            text="31 Battles"
            type="radio"
            value={31}
            name="battles"
            className="battleInput"
        /><br/>
        <CommonInput
            text="63 Battles"
            type="radio"
            value={63}
            name="battles"
            className="battleInput"
        /><br/>
        <CommonInput
            text="127 Battles"
            type="radio"
            value={127}
            name="battles"
            className="battleInput"
        /><br/>
        <CommonInput
            text="255 Battles"
            type="radio"
            value={255}
            name="battles"
            className="battleInput"
        /><br/>
        <CommonInput
            text="511 Battles"
            type="radio"
            value={511}
            name="battles"
            className="battleInput"
        /><br/>
        <button>Start!</button>
    </form>
}