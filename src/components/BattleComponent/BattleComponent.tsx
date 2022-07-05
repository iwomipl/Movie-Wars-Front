import React from "react";
import {MovieView} from "../MovieView/MovieView";

import './battleComponent.css'

export const BattleComponent = ()=>{

    const handleSubmit = ()=>{

    }

    return <div className="battleComponent">
        <div className='fightingMovies'>
        <MovieView className="movieInBattle left" />
        <MovieView className="movieInBattle right" />
        </div>
        <form>
            <button className="chooseMovie" onClick={handleSubmit}>Next Battle</button>
        </form>
    </div>
}