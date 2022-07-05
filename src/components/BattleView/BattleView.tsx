import React, {ChangeEvent, FormEvent, useState} from 'react';
import {setMoviesList} from "../../features/moviesList/moviesList.slice";
import {fetchForMoviesList} from "../../utils/fetchForMoviesList";
import {useDispatch} from "react-redux";
import {MoviesList} from "../MoviesList/MoviesList";
import { BattleForm } from '../BattleForm/BattleForm';

export const BattleView = () => {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(true);

    const [some, setSome] = useState(0);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setMoviesList(await fetchForMoviesList(Math.ceil(some / 2), 'POST')));
        setShowForm(false)
        console.log(e.target);


    }

    const chooseMovies = async (e: ChangeEvent<HTMLInputElement>) => {
        setSome(Number(e.target.value));
    }

    return <>
        <h3>How many of best movies do You want to compare?</h3>
        {showForm ?
            <BattleForm
            submitFunction={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
            changeFunction={(e: ChangeEvent<HTMLInputElement>) => chooseMovies(e)}
            /> :
            <MoviesList/>
        }
        {some ? some : null}
    </>
}