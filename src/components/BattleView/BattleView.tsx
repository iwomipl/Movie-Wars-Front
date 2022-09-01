import React, {FormEvent, useEffect, useState} from 'react';
import {MoviesListState, setGenresStats, setMoviesList} from "../../features/moviesList/moviesList.slice";
import {fetchToAPI, fetchToAPIGET} from "../../utils/fetchToAPI";
import {useDispatch, useSelector} from "react-redux";
import {BattleForm} from '../BattleForm/BattleForm';
import {BattleComponent} from "../BattleComponent/BattleComponent";

import './battleView.css'
import {RootState} from "../../store";
import {setCurrentListOfMovies} from "../../features/battle/battles.slice";
import { MoviesInDataBase, GenresStatObject } from 'types';


export const BattleView = () => {
    const dispatch = useDispatch();
    const {numberOfBattles} = useSelector((store: RootState) => store.battles);
    const {listOfMovies}: MoviesListState = useSelector((store: RootState) => store.moviesList);
    const [showForm, setShowForm] = useState(true);


    useEffect(() => {
        setShowForm(true);
        (async () => await dispatch(await setGenresStats(await fetchToAPIGET('GET') as GenresStatObject)))();
    }, []);

    useEffect(() => {
        (async () => await dispatch(await setCurrentListOfMovies(listOfMovies as MoviesInDataBase[])))();
    }, [listOfMovies]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement | HTMLInputElement>) => {
        e.preventDefault();
        await (async () => await dispatch(await setMoviesList(await fetchToAPI('POST', Math.ceil(numberOfBattles / 2)) as MoviesInDataBase[])))();
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