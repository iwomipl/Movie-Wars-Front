import React, {FormEvent, useEffect, useState} from 'react';
import {MoviesListState, setGenresStats, setMoviesList} from "../../features/moviesList/moviesList.slice";
import {fetchToAPI} from "../../utils/fetchToAPI";
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
    const {additionalVariable} = useSelector((store: RootState) => store.battles);
    const [showForm, setShowForm] = useState(true);


    useEffect(() => {
        setShowForm(true);
        (async () => await dispatch(await setGenresStats(await fetchToAPI('GET') as GenresStatObject)))();
    }, []);

    useEffect(() => {
        (async () => await dispatch(await setCurrentListOfMovies(listOfMovies as MoviesInDataBase[])))();
    }, [listOfMovies]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement | HTMLInputElement>) => {
        e.preventDefault();
        if (numberOfBattles === 15 || numberOfBattles === 31 ||numberOfBattles === 63 || numberOfBattles === 127 || numberOfBattles === 255 || numberOfBattles === 511) {
            await (async () => await dispatch(await setMoviesList(await fetchToAPI('POST', Math.ceil(numberOfBattles / 2), additionalVariable.name) as MoviesInDataBase[])))();
            setShowForm(false);
        } else {
            alert(`Number of movies to battle should be 8, 16, 32, 64, 128, or 256.`)
        }
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