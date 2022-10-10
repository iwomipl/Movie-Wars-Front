import React, {FormEvent, MouseEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {MovieView} from "../MovieView/MovieView";
import { ShowWinnerMovie } from "../ShowWinnerMovie/ShowWinnerMovie";
import {MoviesListState} from "../../features/moviesList/moviesList.slice";
import {
    addMovieToFutureListOfMovies,
    BattlesState,
    resetFutureListOfMovies,
    setCurrentListOfMovies, setRoundNumber
} from "../../features/battle/battles.slice";
import {MoviesInDataBase} from "types";
import {MessageComponent} from "../MessageComponent/MessageComponent";

import './battleComponent.css';

export const BattleComponent = () => {
    const dispatch = useDispatch();
    /**---- base list of movies ----*/
    const {listOfMovies}: MoviesListState = useSelector((store: RootState) => store.moviesList);
    /**---- arrays of movies that are currently chosen from, and movies that will be chosen on next stage  ----*/
    const {currentListOfMovies, futureListOfMovies, numberOfBattles, roundNumber}: BattlesState = useSelector((store: RootState) => store.battles);
    const {additionalVariable} = useSelector((store: RootState) => store.battles);
    const [leftMovie, setLeftMovie] = useState((currentListOfMovies as MoviesInDataBase[])[0] as MoviesInDataBase);
    const [rightMovie, setRightMovie] = useState((currentListOfMovies as MoviesInDataBase[])[1] as MoviesInDataBase);
    /**---- chosenMovie to change class ----*/
    const [chosenMovie, setChosenMovie] = useState('');
    /**---- when there will be no more movies to choose from ----*/
    const [showWinner, setShowWinner] = useState(false);
    /**---- change class to show animation ----*/
    const [movieInBattle, setMovieInBattle] = useState('');
    /**---- Show message on start of each battle ----*/
    const [showMessage, setShowMessage] = useState(false);


    useEffect(() => {
        dispatch(resetFutureListOfMovies());
        dispatch(setRoundNumber(1));
    }, [listOfMovies]);

    useEffect(() => {
        /**---- if current array of movies ends, and there are still movies in futureMovies array ----*/
        if (currentListOfMovies.length === 0 && futureListOfMovies.length > 1) {
            /**---- set current list of movies as list of future list of movies ----*/
            dispatch(setCurrentListOfMovies(futureListOfMovies));
            /**---- then delete everything from list of movies, to start collecting winners from pairs ----*/
            dispatch(resetFutureListOfMovies());

        } else if (currentListOfMovies.length === 0 && futureListOfMovies.length === 1) {
            /**---- if there are no list of movies to chose from, ane only one future movie is remaining, show the winner ----*/
            setShowWinner(true);
        }

        /**---- setting movies from currently used array of movies  ----*/
            setLeftMovie((currentListOfMovies as MoviesInDataBase[])[0] as MoviesInDataBase);
            setRightMovie((currentListOfMovies as MoviesInDataBase[])[1] as MoviesInDataBase);

        /**---- check if it is closed stage of battle ----*/
        if ((currentListOfMovies.length === 0 && [2,4,8,16,32,64,128].includes(futureListOfMovies.length)) || roundNumber === 1){

            /**---- setting class to show start fight block on new battle load ----*/
            setShowMessage(true);

            setTimeout(()=>{
                /**---- hide message div ----*/
                setShowMessage(false);
            }, 1980);

            setTimeout(()=>{
                /**---- setting class to get animation on div load ----*/
                setMovieInBattle('movieInBattle ');
            }, 2000);

        } else {

            /**---- setting class to get animation on div load ----*/
            setMovieInBattle('movieInBattle ');
        }


    }, [currentListOfMovies])

    const handleClick = (e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        /**---- set the winner movie ----*/
        setChosenMovie(e.currentTarget.value);
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        /**---- delete movieInBattle class to show animation on movie load ----*/
        setMovieInBattle('');

        /**---- simple validation ----*/
        if (chosenMovie === '') {
            return;
        }
        /**---- add winner movie to the future list ----*/
        chosenMovie === 'left' ?
          dispatch(addMovieToFutureListOfMovies(leftMovie)) :
          dispatch(addMovieToFutureListOfMovies(rightMovie));

        /**---- get rid of last two movies from current list ----*/
        dispatch(setCurrentListOfMovies(currentListOfMovies.slice(2) as MoviesInDataBase[]))

        /**---- Change number of round to messageComponent ----*/
        dispatch(setRoundNumber(roundNumber+1))

        /**---- setting chosenMovie to '' to reset state ----*/
        setChosenMovie('');
    }

    return <>{ !showWinner ?
        <div className="battleComponent">
            {showMessage && <MessageComponent/>}
            <h4>You have chosen to battle {Math.ceil(numberOfBattles/2)} movies out of {additionalVariable.name} category. Choose which movie is better</h4>
        <div>
            <form className='fightingMovies' onSubmit={handleSubmit}>
                <MovieView
                    className={movieInBattle+'non-visible'}
                    value="left"
                    origTitle={leftMovie.origTitle}
                    year={leftMovie.year}
                    imgOfMovie={leftMovie.imgOfMovie}
                    imgClassName="movieImg--left"
                    poster={leftMovie.poster}
                    actors={leftMovie.actors}
                    plot={leftMovie.plot}
                    director={leftMovie.director}
                    function={handleClick}
                    checked={chosenMovie === 'left'}
                />
                <MovieView
                    className={movieInBattle+'non-visible'}
                    value="right"
                    origTitle={rightMovie.origTitle}
                    year={rightMovie.year}
                    imgOfMovie={rightMovie.imgOfMovie}
                    imgClassName="movieImg--right"
                    poster={rightMovie.poster}
                    actors={rightMovie.actors}
                    plot={rightMovie.plot}
                    director={rightMovie.director}
                    function={handleClick}
                    checked={chosenMovie === 'right'}
                />
                <button className="chooseMovie" disabled={chosenMovie === ''}>Next Battle</button>
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