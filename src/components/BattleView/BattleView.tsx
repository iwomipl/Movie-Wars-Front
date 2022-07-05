import React, {FormEvent, useEffect, useState} from 'react';
import {setMoviesList} from "../../features/moviesList/moviesList.slice";
import {fetchForMoviesList} from "../../utils/fetchForMoviesList";
import {useDispatch} from "react-redux";
import {BattleForm} from '../BattleForm/BattleForm';
import {BattleComponent} from "../BattleComponent/BattleComponent";

import './battleView.css'
export const BattleView = () => {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(true);

    useEffect(()=>{
        setShowForm(true);

    }, [])

    const [some, setSome] = useState(0);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setMoviesList(await fetchForMoviesList(Math.ceil(some / 2), 'POST')));
        setShowForm(false)
    }

    return <>

        {showForm ? <div className="mainBattleView">
                <h3>How many of best movies do You want to compare?</h3>
                <BattleForm
                    submitFunction={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
                />
            </div> :
            <div className="mainBattleView">
                <h4>Choose which one is better</h4>
                <BattleComponent/>
            </div>
        }
    </>
}