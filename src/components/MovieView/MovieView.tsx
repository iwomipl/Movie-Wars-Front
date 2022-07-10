import React, {MouseEvent} from "react";
import { MoviesInDataBase } from "types";

interface Props extends Omit<MoviesInDataBase, 'rated' | 'polTitle' | 'position'>{
    className: string;
    value: 'left' | 'right';
    function: (e: MouseEvent<HTMLInputElement>) => void;
}


export const MovieView = (props: Props) => {

    return <label className={props.className} title={props.origTitle}>
        <input
            type="image"
            name={props.origTitle}
            alt={props.className}
            className="movieImg"
            onClick={(e) => props.function(e)}
            src={props.poster || props.imgOfMovie}
        />
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
        {/*<div className="button-cover"></div>*/}
    </label>;
}