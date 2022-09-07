import React from "react";
import {NavLink} from "react-router-dom";

import './header.css'

export const Header = () => {

    return (
        <div className="navigation">
            <div className="navigation__elements">
                <h1>Welcome to Movie Wars</h1>
              <div>
                <NavLink to='/' className="navigation__button">Main</NavLink>
                <NavLink to='/battle' className="navigation__button">To Battle</NavLink>
              </div>
            </div>
        </div>)
}