import React from 'react';
import {NavLink} from "react-router-dom";

import './mainView.css'


export const MainView = () => {

    return <>
        <h1>Hi there!</h1>
        <p>This website is for people who like Movies, and are willing to play a little game to find out, which movie do they like the most.</p>
        <h3>The mechanism in Movie Wars is simple.</h3>
        <p>First choose genre of movies you want to compare.</p>
        <p>Then how many movies you want to compare.</p>
        <p>The App will show you pairs of movies. Your job is to choose between them. Which one is better.</p>
        <p>You will be having almost two times more battles, than movies, so choose the number carefully.</p>
        <h4>Our goal is to choose the best one.</h4>
        <em>Remember, that you don't know all movies and the more movies you will choose from the greater the chance to not know specific movie.</em>
        <h3>Godspeed and have fun with movies!</h3>
        <div id="mainButton">
        <NavLink to='/battle' className="navigation__button" >To Battle!</NavLink>
        </div>
        <em id="bottom-em">The app is created mainly for computers. It might be working on phones, but looks much worse.</em>
    </>
}