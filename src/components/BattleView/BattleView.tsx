import React, {ChangeEvent, FormEvent, useState} from 'react';
import {setMoviesList} from "../../features/moviesList/moviesList.slice";
import {fetchForMoviesList} from "../../utils/fetchForMoviesList";
import {useDispatch} from "react-redux";
import {MoviesList} from "../MoviesList/MoviesList";

export const BattleView = ()=>{
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(true);

    const [some, setSome] =  useState(0);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setMoviesList(await fetchForMoviesList(Math.ceil(some/2))));
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
            <label>15 Battles
                <input type="radio" value='15' name="battles" onChange={chooseMovies}/>
            </label><br/>
            <label>31 Battles
            <input type="radio" value='31' name="battles" onChange={chooseMovies}/>
            </label><br/>
            <label>63 Battles
                <input type="radio" value='63' name="battles" onChange={chooseMovies}/>
            </label><br/>
            <label>127 Battles
                <input type="radio" value='127' name="battles" onChange={chooseMovies}/>
            </label><br/>
            <label>255 Battles
                <input type="radio" value='255' name="battles" onChange={chooseMovies}/>
            </label><br/>
            <label>511 Battles
                <input type="radio" value='511' name="battles" onChange={chooseMovies}/>
            </label><br/>
            <button>Best 16</button>
        </form> :
            <MoviesList/>
        }
    </>
}