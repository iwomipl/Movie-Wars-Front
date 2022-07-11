import React, {ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

interface Props {
    text: string;
    type: string;
    value: number;
    name: string
    className: string;
    function?:(e: ChangeEvent<HTMLInputElement>)=> Promise<void> | void;
}


export const CommonInput = (props: Props)=>{
    const {numberOfBattles} = useSelector((store: RootState) => store.battles);

    return <label>{props.text}
        <input
            type={props.type}
            value={props.value}
            name={props.name}
            onChange={props.function || undefined}
            className={props.className}
            checked={props.value === numberOfBattles}
        />
    </label>
}