import React, {ChangeEvent,  useState} from "react";

interface Props {
  options: string[]|number[];
  changeFunction: (e: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  value: number | string;
}

export const SelectComponent = (props: Props) => {
  const [options, setOptions] = useState(props.options);


  return (<div><select className="battles forms option-search" name={props.name} value={props.value} onChange={(e)=>props.changeFunction(e)}>
    {options.map(opt=> <option key={opt} value={opt}>{opt}</option>)}
      </select>
  </div>)
}