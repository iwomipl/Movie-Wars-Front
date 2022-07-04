import React, {ChangeEvent, FormEvent, useState} from 'react';
import {setMoviesList} from "../../features/moviesList/moviesList.slice";
import {fetchForMoviesList} from "../../utils/fetchForMoviesList";
import {useDispatch} from "react-redux";
import {MoviesList} from "../MoviesList/MoviesList";
import {CommonInput} from "../common/CommonInput";

export const BattleView = ()=>{
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(true);

    const [some, setSome] =  useState(0);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setMoviesList(await fetchForMoviesList(Math.ceil(some/2), 'POST')));
        setShowForm(false)
        console.log(e.target);


    }

    const chooseMovies = async (e: ChangeEvent<HTMLInputElement>)=> {
        setSome(Number(e.target.value));
    }

    return <>
        <h3>How many of best movies do You want to compare?</h3>
        {showForm ?
        <form onSubmit={handleSubmit} id="battles">
            <CommonInput
                text="15 Battles"
                type="radio"
                value={15}
                name="battles"
                function={(e: ChangeEvent<HTMLInputElement>) => chooseMovies(e)}
                className="battleInput"
            /><br/>
            <CommonInput
                text="31 Battles"
                type="radio"
                value={31}
                name="battles"
                function={(e: ChangeEvent<HTMLInputElement>) => chooseMovies(e)}
                className="battleInput"
            /><br/>
            <CommonInput
                text="63 Battles"
                type="radio"
                value={63}
                name="battles"
                function={(e: ChangeEvent<HTMLInputElement>) => chooseMovies(e)}
                className="battleInput"
            /><br/>
            <CommonInput
                text="127 Battles"
                type="radio"
                value={127}
                name="battles"
                function={(e: ChangeEvent<HTMLInputElement>) => chooseMovies(e)}
                className="battleInput"
            /><br/>
            <CommonInput
                text="255 Battles"
                type="radio"
                value={255}
                name="battles"
                function={(e: ChangeEvent<HTMLInputElement>) => chooseMovies(e)}
                className="battleInput"
            /><br/>
            <CommonInput
                text="511 Battles"
                type="radio"
                value={511}
                name="battles"
                function={(e: ChangeEvent<HTMLInputElement>) => chooseMovies(e)}
                className="battleInput"
            /><br/>
            <button>Best 16</button>
        </form> :
            <MoviesList/>
        }
        {some ? some : null}
    </>
}