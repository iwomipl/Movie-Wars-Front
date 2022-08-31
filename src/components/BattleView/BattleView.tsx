import React, {FormEvent, useEffect, useState} from 'react';
import {MoviesListState, setMoviesList} from "../../features/moviesList/moviesList.slice";
import {fetchForMoviesList} from "../../utils/fetchForMoviesList";
import {useDispatch, useSelector} from "react-redux";
import {BattleForm} from '../BattleForm/BattleForm';
import {BattleComponent} from "../BattleComponent/BattleComponent";

import './battleView.css'
import {RootState} from "../../store";
import {setCurrentListOfMovies} from "../../features/battle/battles.slice";
import { MoviesInDataBase } from 'types';


export const BattleView = () => {
    const dispatch = useDispatch();
    const {numberOfBattles} = useSelector((store: RootState) => store.battles);
    const {listOfMovies}: MoviesListState = useSelector((store: RootState) => store.moviesList);
    const [showForm, setShowForm] = useState(true);


    useEffect(() => {
        setShowForm(true);

    }, []);

    useEffect(() => {
        (async () => await dispatch(await setCurrentListOfMovies(listOfMovies as MoviesInDataBase[])))();
    }, [listOfMovies]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement | HTMLInputElement>) => {
        e.preventDefault();
        await (async () => await dispatch(await setMoviesList(await fetchForMoviesList(Math.ceil(numberOfBattles / 2), 'POST'))))();
        setShowForm(false);
    }

    return <>

        {showForm ? <div className="mainBattleView">
                <BattleForm
                    submitFunction={handleSubmit}
                />
            </div> :
            <div className="mainBattleView">
                <BattleComponent/>
            </div>
        }
    </>
}