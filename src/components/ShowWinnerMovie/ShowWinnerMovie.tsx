import React from "react";
import {MoviesInDataBase} from "types";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

import './ShowWinnerMovie.css'

interface Props extends Omit<MoviesInDataBase, 'rated' | 'polTitle' | 'position' | 'genre'> {

}

export const ShowWinnerMovie = (props: Props) => {
    const {additionalVariable} = useSelector((store: RootState) => store.battles);

    return <div className="lastMovie">
        <h3 className="winner-h3">That's it, you have chosen best {additionalVariable.name} Movie for You.</h3>
        <h2 className="winner-h2">The winner is:</h2>
        <div className="movieInBattle good-shadow">
            <img src={props.poster} alt={props.origTitle} className="movieImg"/>
            <div className="movie-desc">
                <h4>{props.origTitle}</h4>
                <h6>{(props.year).toString()}</h6>
                <h4>Director:</h4>
                <p><strong>{props.director}</strong></p>
                <h4>Starring:</h4>
                <h6>{props.actors}</h6>
                <h4>Plot:</h4>
                <h6>{props.plot}</h6>
            </div>
        </div>
    </div>
}