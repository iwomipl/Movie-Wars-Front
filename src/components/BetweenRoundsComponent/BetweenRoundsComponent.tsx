import React from "react";

import './BetweenRoundsComponent.css'
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {BattlesState} from "../../features/battle/battles.slice";
import {messageSwitch} from "../../utils/message.function";

export const BetweenRoundsComponent = ()=>{
  const {currentListOfMovies, numberOfBattles, roundNumber}: BattlesState = useSelector((store: RootState) => store.battles);

  return<div>
    <p className="round-name">Round {roundNumber} of {Math.ceil(numberOfBattles/2)-1}</p>
    <p className="round-name message-color">{roundNumber === 1 ? messageSwitch(roundNumber) : messageSwitch(currentListOfMovies.length)}</p>
    <p className="fight">FIGHT!</p>
  </div>
}