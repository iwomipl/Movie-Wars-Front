import React, {ChangeEvent, useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

interface Props {
    text: string;
    type: string;
    value: number | string;
    name: string
    className: string;
    function?:(e: ChangeEvent<HTMLInputElement>)=> Promise<void> | void;
    disabled?: boolean;
}


export const CommonInput = (props: Props)=>{
    const {numberOfBattles} = useSelector((store: RootState) => store.battles);
    const {additionalVariable} = useSelector((store: RootState) => store.battles);
    useEffect(()=>{

    }, [additionalVariable])

    return <label>{props.text}<br/>
        <input
            type={props.type}
            value={props.value}
            name={props.name}
            onChange={props.function || undefined}
            className={props.className}
            checked={((Number(additionalVariable.number) >= Math.ceil(numberOfBattles/2)) && props.value === numberOfBattles) || props.value === additionalVariable.genre}
            disabled={props.disabled}
        />
    </label>
}