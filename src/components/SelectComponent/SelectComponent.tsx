import React, {ChangeEvent,  useState} from "react";

interface Props {
  options: string[];
  changeFunction: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectComponent = (props: Props) => {
  const [options, setOptions] = useState(props.options);


  return (<div><select className="battles forms" onChange={(e)=>props.changeFunction(e)}>
    {options.map(opt=> <option key={opt} value={opt}>{opt}</option>)}
      </select>
  </div>)
}