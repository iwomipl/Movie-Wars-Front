import React, {ChangeEvent, useEffect, useState} from "react";

import {NumberOfBattles} from "../NumberOfBattles/NumberOfBattles";
import {SelectComponent} from "../SelectComponent/SelectComponent";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setAdditionalVariable} from "../../features/battle/battles.slice";
import {fetchForNumbers} from "../../utils/fetchToAPI";


export const AdditionalSettingsToForm = () => {
  const dispatch = useDispatch();
  const {additionalVariable} = useSelector((store: RootState) => store.battles);
  const [tempObj, setTempObj] = useState(additionalVariable);
  const {possibleGenres, possibleRating, possibleStartYear, possibleEndYear} = useSelector((store: RootState) => store.moviesList);
  useEffect(()=>{
    dispatch(setAdditionalVariable(tempObj));
  }, [tempObj])

  const changeFunction = async (e: ChangeEvent<HTMLSelectElement>)=> {
    e.preventDefault();
    await setTempObj({
      ...tempObj,
      [e.target.name]: e.target.value,
      number: await fetchForNumbers({...tempObj, [e.target.name]: e.target.value,} ) as number
    });

  }

  return (<>
    <h3>How many of best movies do You want to compare?</h3>
    <ul>{Object.entries(tempObj).map(([keyFromObject, value])=> <li key={value}>{keyFromObject}: {value}</li>)}</ul>
    <form className="battle-form">
      <label>Choose from following options.</label>
      <div>
        <SelectComponent
          options={possibleGenres}
          changeFunction={changeFunction}
          name="genre"
          value={additionalVariable.genre}
        />
        <SelectComponent
          options={possibleRating}
          changeFunction={changeFunction}
          name="rating"
          value={additionalVariable.rating as string}
        />
        <SelectComponent
          options={possibleStartYear}
          changeFunction={changeFunction}
          name="startYear"
          value={additionalVariable.startYear as number}
        />
        <SelectComponent
          options={possibleEndYear}
          changeFunction={changeFunction}
          name="endYear"
          value={additionalVariable.endYear as number}
        />
      </div>
  <label>Choose number of movies to battle</label>
  <NumberOfBattles/>
  <button id="start-battles">Start!</button>
    </form>
    </>)
}