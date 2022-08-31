import React, {useEffect} from "react";

import './Genres.css'
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {CommonInput} from "../common/CommonInput";

export const Genres = ()=>{
  const MoviesListState = useSelector((store: RootState) => store.moviesList);

  useEffect(()=>{

  },[])

  //@TODO create function to get from API number of movies with genres and # of movies
  //@TODO create function (disable={genre.length > 8}) to disable buttons with more battles than the number of movies in genre
  //@TODO use common input and map function to show buttons with genre options


  return<div className="battles">
    {(MoviesListState.genresStats as []).map((genreData: {
      name: string;
      number: number;
    }) => < div key={genreData.name+'number'}>
      <CommonInput
        text={`${genreData.name}`}
        type="radio"
        value={genreData.number}
        name="battles"
        className="option-input radio"
        // function={changeValue}
        disabled={false}
      /><br/>
    </div>)}
  </div>
}