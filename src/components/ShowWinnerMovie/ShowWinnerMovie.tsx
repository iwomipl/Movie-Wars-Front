import React from "react";
import {MoviesInDataBase} from "types";

interface Props extends Omit<MoviesInDataBase, 'rated' | 'polTitle' | 'position' | 'genre'> {

}

export const ShowWinnerMovie = (props: Props) => {
    return <div className="lastMovie">
        <h3>That's it, you have chosen best Movie for You.</h3>
        <h2>Your winner is:</h2>
        <div className="movieInBattle good-shadow">
            <img src={props.poster} alt={props.origTitle} className="movieImg"/>
            <div className="movie-desc">
                <h4>{props.origTitle}</h4>
                <h6>{new Date(props.year).getFullYear()}</h6>
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