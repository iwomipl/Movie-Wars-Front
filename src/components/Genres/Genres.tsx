import React, {ChangeEvent, useEffect} from "react";

import './Genres.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {CommonInput} from "../common/CommonInput";
import {setAdditionalVariable, setNumberOfBattles} from "../../features/battle/battles.slice";
import { GenresStatObject } from "types";


export const Genres = ()=>{
  const dispatch = useDispatch();
  const MoviesListState = useSelector((store: RootState) => store.moviesList);
  const {numberOfBattles} = useSelector((store: RootState) => store.battles);

  useEffect(()=>{

  },[])

  //@TODO create function to get from API number of movies with genres and # of movies

  const changeAdditionalVariableValue = (e: ChangeEvent<HTMLInputElement>) => {
    const chosenNumber = (MoviesListState.genresStats as GenresStatObject)[e.target.value];
   if(chosenNumber >= Math.ceil(numberOfBattles/2)) {
     dispatch(setAdditionalVariable({name: e.target.value, number: chosenNumber}))
   } else {
     dispatch(setAdditionalVariable({name: e.target.value, number: chosenNumber}));
     dispatch(setNumberOfBattles(8*2-1));
   }
  };

  return<div className="battles">
    {Object.entries(MoviesListState.genresStats).map((genreData) => < div key={genreData[0]}>
      <CommonInput
        text={`${genreData[0]}`}
        type="radio"
        value={genreData[0]}
        name="genres"
        className="option-input radio"
        function={changeAdditionalVariableValue}
        disabled={false}
      /><br/>
    </div>)}
  </div>
}