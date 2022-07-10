import React, {MouseEvent, useEffect, useState} from "react";
import {MovieView} from "../MovieView/MovieView";

import './battleComponent.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {MoviesInDataBase} from "types";
import {MoviesListState} from "src/features/moviesList/moviesList.slice";

export const BattleComponent = () => {
    const dispatch = useDispatch();
    const {listOfMovies}: MoviesListState = useSelector((store: RootState) => store.moviesList);
    const [leftMovie, setLeftMovie] = useState((listOfMovies as MoviesInDataBase[])[0]);
    const [rightMovie, setRightMovie] = useState((listOfMovies as MoviesInDataBase[])[1]);

    useEffect(() => {
        console.log(leftMovie);
        console.log(rightMovie);
    }, [])

    const handleClick = (e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(e.currentTarget.name);
    }
    const handleSubmit = () => {

    }

    return <div className="battleComponent">
        <div>
            <form className='fightingMovies'>
                <MovieView
                    className="movieInBattle left"
                    value="left"
                    origTitle={leftMovie.origTitle}
                    year={leftMovie.year}
                    imgOfMovie={leftMovie.imgOfMovie}
                    genre={leftMovie.genre}
                    poster={leftMovie.poster}
                    actors={leftMovie.actors}
                    plot={leftMovie.plot}
                    director={leftMovie.director}
                    function={handleClick}
                />
                <MovieView
                    className="movieInBattle left"
                    value="left"
                    origTitle={rightMovie.origTitle}
                    year={rightMovie.year}
                    imgOfMovie={rightMovie.imgOfMovie}
                    genre={rightMovie.genre}
                    poster={rightMovie.poster}
                    actors={rightMovie.actors}
                    plot={rightMovie.plot}
                    director={leftMovie.director}
                    function={handleClick}
                />
                <button className="chooseMovie" onClick={handleSubmit}>Next Battle</button>
            </form>
        </div>
    </div>
}