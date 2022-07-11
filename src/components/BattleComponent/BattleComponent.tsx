import React, {FormEvent, MouseEvent, useEffect, useState} from "react";
import {MovieView} from "../MovieView/MovieView";

import './battleComponent.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {MoviesInDataBase} from "types";
import {MoviesListState} from "../../features/moviesList/moviesList.slice";
import {
    addMovieToFutureListOfMovies,
    BattlesState,
    resetFutureListOfMovies,
    setCurrentListOfMovies
} from "../../features/battle/battles.slice";
import { ShowWinnerMovie } from "../ShowWinnerMovie/ShowWinnerMovie";

export const BattleComponent = () => {
    const dispatch = useDispatch();
    const {listOfMovies}: MoviesListState = useSelector((store: RootState) => store.moviesList);
    const {currentListOfMovies, futureListOfMovies}: BattlesState = useSelector((store: RootState) => store.battles);
    const [leftMovie, setLeftMovie] = useState((currentListOfMovies as MoviesInDataBase[])[0] as MoviesInDataBase);
    const [rightMovie, setRightMovie] = useState((currentListOfMovies as MoviesInDataBase[])[1] as MoviesInDataBase);
    const [chosenMovie, setChosenMovie] = useState('');
    const [showWinner, setShowWinner] = useState(false);


    useEffect(() => {
        dispatch(resetFutureListOfMovies());

    }, [listOfMovies]);

    useEffect(() => {
        if (currentListOfMovies.length === 0 && futureListOfMovies.length > 1) {
            dispatch(setCurrentListOfMovies(futureListOfMovies));
            dispatch(resetFutureListOfMovies());
        } else if (currentListOfMovies.length === 0 && futureListOfMovies.length === 1) {
            setShowWinner(true);
        }
            setLeftMovie((currentListOfMovies as MoviesInDataBase[])[0] as MoviesInDataBase);
            setRightMovie((currentListOfMovies as MoviesInDataBase[])[1] as MoviesInDataBase);
    }, [currentListOfMovies])

    const handleClick = (e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setChosenMovie(e.currentTarget.value);
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chosenMovie === '') {
            return;
        }
        if (chosenMovie === 'left') {
            dispatch(addMovieToFutureListOfMovies(leftMovie))
        } else {
            dispatch(addMovieToFutureListOfMovies(rightMovie))
        }
        dispatch(setCurrentListOfMovies(currentListOfMovies.slice(2) as MoviesInDataBase[]))
        setChosenMovie('');
    }

    return <>{ !showWinner ?
        <div className="battleComponent">
        <div>
            <form className='fightingMovies' onSubmit={handleSubmit}>
                <MovieView
                    className="movieInBattle left"
                    value="left"
                    origTitle={leftMovie.origTitle}
                    year={leftMovie.year}
                    imgOfMovie={leftMovie.imgOfMovie}
                    poster={leftMovie.poster}
                    actors={leftMovie.actors}
                    plot={leftMovie.plot}
                    director={leftMovie.director}
                    function={handleClick}
                />
                <MovieView
                    className="movieInBattle left"
                    value="right"
                    origTitle={rightMovie.origTitle}
                    year={rightMovie.year}
                    imgOfMovie={rightMovie.imgOfMovie}
                    poster={rightMovie.poster}
                    actors={rightMovie.actors}
                    plot={rightMovie.plot}
                    director={leftMovie.director}
                    function={handleClick}
                />
                <button className="chooseMovie">Next Battle</button>
            </form>
        </div>
    </div>  :
    <ShowWinnerMovie
        origTitle={futureListOfMovies[0].origTitle}
        year={futureListOfMovies[0].year}
        imgOfMovie={futureListOfMovies[0].imgOfMovie}
        poster={futureListOfMovies[0].poster}
        actors={futureListOfMovies[0].actors}
        plot={futureListOfMovies[0].plot}
        director={futureListOfMovies[0].director}
    />
    }
        </>
}