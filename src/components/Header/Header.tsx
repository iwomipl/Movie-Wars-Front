import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setShowForm} from "../../features/battle/battles.slice";

import './header.css'

export const Header = () => {
  const dispatch = useDispatch();
  const {showForm} = useSelector((store: RootState) => store.battles);

   const handleClick = (showFormChange: 0|1|2 = 1)=>{
    if (showFormChange) {
      dispatch(setShowForm(showFormChange))
    } else {
      dispatch(setShowForm(1));
      dispatch(setShowForm(showFormChange))
    }
  }

    return (
        <div className="navigation">
            <div className="navigation__elements">
                <h1>Welcome to Movie Wars</h1>
              <div>
                <NavLink
                  to='/'
                  className="navigation__button"
                  onClick={()=>handleClick(0)}
                >Main</NavLink>
                <NavLink
                  to='/battle'
                  className={showForm === 1 ?
                    'navigation__button navigation__button--disabled' :
                    `navigation__button`}
                  onClick={()=>handleClick(1)}>{
                    (window.location.pathname === '/' || window.location.pathname === '/search') ?
                      'Quick Search' :
                      showForm ?
                        'Quick Search' :
                        'Back to Quick Search'
                }</NavLink>
                <NavLink
                  to='/search'
                  className={showForm === 2?
                    'navigation__button navigation__button--disabled' :
                    `navigation__button`}
                  onClick={()=>handleClick(2)}>{
                  (window.location.pathname === '/' || window.location.pathname === '/battle') ?
                    'New Search' :
                    showForm ?
                      'New Search' :
                      'Back to New Search'
                }</NavLink>
              </div>
            </div>
        </div>)
}