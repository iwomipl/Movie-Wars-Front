import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";

import {NumberOfBattles} from "../NumberOfBattles/NumberOfBattles";
import {SelectComponent} from "../SelectComponent/SelectComponent";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {resetAdditionalVariable, setAdditionalVariable, setNumberOfBattles} from "../../features/battle/battles.slice";
import {fetchForNumbers} from "../../utils/fetchToAPI";

import './AdditionalSettingsToForm.css'

interface Props {
  submitFunction: (e: FormEvent<HTMLFormElement>) => void;
}

export const AdditionalSettingsToForm = (props: Props) => {
  const dispatch = useDispatch();
  const {additionalVariable} = useSelector((store: RootState) => store.battles);
  const [tempObj, setTempObj] = useState(additionalVariable);
  const {possibleGenres, possibleRating, possibleStartYear, possibleEndYear} = useSelector((store: RootState) => store.moviesList);

  useEffect(()=>{
    dispatch(resetAdditionalVariable());

  }, [])

  useEffect(()=>{
    dispatch(setAdditionalVariable(tempObj));
    dispatch(setNumberOfBattles(8*2-1));
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
    {/*<ul>{Object.entries(tempObj).map(([keyFromObject, value])=> <li key={value}>{keyFromObject}: {value}</li>)}</ul>*/}
    <form onSubmit={(e) => props.submitFunction(e)} className="battle-form">
      <h3>Choose from following options.</h3>
      <div>
        <label> Genre:
          <SelectComponent
            options={possibleGenres}
            changeFunction={changeFunction}
            name="genre"
            value={additionalVariable.genre}
          />
        </label>
        <label> Rating:
        <SelectComponent
          options={possibleRating}
          changeFunction={changeFunction}
          name="rating"
          value={additionalVariable.rating as string}
        />
        </label>
        <label> Release from:
        <SelectComponent
          options={possibleStartYear}
          changeFunction={changeFunction}
          name="startYear"
          value={additionalVariable.startYear as number}
        />
        </label>
        <label> Release to:
        <SelectComponent
          options={possibleEndYear}
          changeFunction={changeFunction}
          name="endYear"
          value={additionalVariable.endYear as number}
        />
        </label>
      </div>
      <label>Choose number of movies to battle</label>
      <NumberOfBattles/>
      <button
        id={8 > Number(additionalVariable.number) ? "start-battles-disabled" : "start-battles"}
        className={"start-battles-new-search"+`${8 > Number(additionalVariable.number) ? '' : " disabled-start"}`}
        disabled={8 > Number(additionalVariable.number)}
      >Start!</button>
    </form>
    </>)
}