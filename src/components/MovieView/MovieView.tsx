import React, {MouseEvent} from "react";
import { MoviesInDataBase } from "types";

interface Props extends Omit<MoviesInDataBase, 'rated' | 'polTitle' | 'position' | 'genre'>{
    className: string;
    value: 'left' | 'right';
    function: (e: MouseEvent<HTMLInputElement>) => void;
    checked: boolean;
}


export const MovieView = (props: Props) => {

    return <label className={props.className} title={props.origTitle}>
        <input
            type="image"
            name={props.origTitle}
            alt={props.origTitle}
            className="movieImg"
            value={props.value}
            onClick={(e) => props.function(e)}
            src={!props.poster || props.poster === 'N/A' ? props.imgOfMovie : props.poster}
        />
        <input type="radio" checked={props.checked} id="radio-movie"/>
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
        {/*<div className="button-cover"></div>*/}
    </label>;
}