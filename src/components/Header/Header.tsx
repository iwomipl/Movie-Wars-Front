import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setShowForm} from "../../features/battle/battles.slice";

import './header.css'

export const Header = () => {
  const dispatch = useDispatch();
  const {showForm} = useSelector((store: RootState) => store.battles);

  const handleClick = (showFormChange: boolean)=>{
    if (showFormChange) {
      dispatch(setShowForm(showFormChange))
    } else {
      dispatch(setShowForm(true));
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
                  onClick={()=>handleClick(false)}
                >Main</NavLink>
                <NavLink
                  to='/battle'
                  className={showForm ?
                    'navigation__button navigation__button--disabled' :
                    `navigation__button`}
                  onClick={()=>handleClick(true)}>{
                    (window.location.pathname === '/') ?
                      'To Battle' :
                      showForm ?
                        'Battle Params' :
                        'Back to Battle Params'
                }</NavLink>
              </div>
            </div>
        </div>)
}