import React, {ChangeEvent} from "react";

interface Props {
    text: string;
    type: string;
    value: number;
    name: string
    className: string;
    function:(e: ChangeEvent<HTMLInputElement>)=> Promise<void>;
}


export const CommonInput = (props: Props)=>{


    return <label>{props.text}
        <input type={props.type} value={props.value} name={props.name} onChange={props.function} className={props.className}/>
    </label>
}