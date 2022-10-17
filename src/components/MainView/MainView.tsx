import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setShowForm} from "../../features/battle/battles.slice";

import './mainView.css'

export const MainView = () => {
    const dispatch = useDispatch();

    const handleClick = (showFormChange: 1|2)=>{
        dispatch(setShowForm(showFormChange))
    }

    return <>
        <h1>Hi there!</h1>
        <p>This website is for people who like Movies and are willing to play a little game to find out, which movie do they like the most.</p>
        <h3>The mechanism in <strong>Movie Wars</strong> is quite simple.</h3>
        <p>You can choose from two ways of filtering movies: <strong>quick</strong> and <strong>advanced</strong>.</p>
        <div className="search-table">
        <NavLink  to='/battle' className="search-table-item" onClick={()=>handleClick(1)}>
            <h4>Quick search</h4>
            <p>Choose genre of movies you want to compare.</p>
            <p>Then how many movies you want to compare.</p>
            <p>Hit the start button and play the game.</p>
        </NavLink>
        <NavLink to='/search' className="search-table-item" onClick={()=>handleClick(2)}>
            <h4>Advanced search</h4>
            <p>Choose from multiple options you want to choose.</p>
            <p>Then how many movies you want to compare.</p>
            <p>Hit the start button and play the game.</p>
        </NavLink>
        </div>
        <p>The App will show you pairs of movies. Your job is to choose between them. Which one is better.</p>
        <p>You will be having almost two times more battles, than movies, so choose the number carefully.</p>
        <h4>Our goal is to choose the best one.</h4>
        <em>Remember, that you don't know all movies and the more movies you will choose from the greater the chance to not know specific movie.</em>
        <h3>Godspeed and have fun with movies!</h3>
    </>
}