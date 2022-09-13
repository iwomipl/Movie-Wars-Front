import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {CommonInput} from "../common/CommonInput";
import {setNumberOfBattles} from "../../features/battle/battles.slice";
import {MoviesListState} from "../../features/moviesList/moviesList.slice";


export const NumberOfBattles = ()=>{
  const dispatch = useDispatch();
  const {additionalVariable} = useSelector((store: RootState) => store.battles);
  const {numberOfBattlesPossible}: MoviesListState = useSelector((store: RootState) => store.moviesList);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setNumberOfBattles(Number(e.target.value)));
  }

  return <div className="battles forms">
    {numberOfBattlesPossible.map(moviesNumber => < div key={moviesNumber.toString()}>
      <CommonInput
        text={`${moviesNumber} Best Movies`}
        type="radio"
        value={moviesNumber * 2 - 1}
        name="battles"
        className="option-input radio"
        function={changeValue}
        disabled={Number(additionalVariable.number) >7 && moviesNumber > Number(additionalVariable.number)}
      /><br/>
    </div>)}
  </div>
}