import React, {ChangeEvent,  useState} from "react";

interface Props {
  options: string[]|number[];
  changeFunction: (e: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}

export const SelectComponent = (props: Props) => {
  const [options, setOptions] = useState(props.options);


  return (<div><select className="battles forms" name={props.name} onChange={(e)=>props.changeFunction(e)}>
    {options.map(opt=> <option key={opt} value={opt}>{opt}</option>)}
      </select>
  </div>)
}