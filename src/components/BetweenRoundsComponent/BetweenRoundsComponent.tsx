import React from "react";

import './BetweenRoundsComponent.css'
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {BattlesState} from "../../features/battle/battles.slice";

export const BetweenRoundsComponent = ()=>{
  const {numberOfBattles}: BattlesState = useSelector((store: RootState) => store.battles);

  return<div>
    <p className="round-name">Round 1 of {Math.ceil(numberOfBattles)}</p>
    <p className="fight">FIGHT!</p>
  </div>
}