import React, {ChangeEvent, useState} from "react";

import {NumberOfBattles} from "../NumberOfBattles/NumberOfBattles";
import {SelectComponent} from "../SelectComponent/SelectComponent";


export const AdditionalSettingsToForm = () => {
  const [chosen, setChosen] = useState('duu');

  const changeFunction =(e: ChangeEvent<HTMLSelectElement>)=>{
    e.preventDefault();
    setChosen(e.target.value)
  }

  return (<>
    <h3>How many of best movies do You want to compare?</h3>
    <p>{chosen}</p>
    <form className="battle-form">
      <label>Choose from following options.</label>
      <div>
        <SelectComponent
          options={['one', 'two', 'three']}
          changeFunction={changeFunction}
        />
      </div>
  <label>Choose number of movies to battle</label>
  <NumberOfBattles/>
  <button id="start-battles">Start!</button>
    </form>
    </>)
}