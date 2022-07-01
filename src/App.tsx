import React from 'react';
import {MainView} from "./components/MainView/MainView";
import {Route, Routes } from 'react-router-dom';
import {Header} from "./components/Header/Header";

import './App.css';
import { BattleView } from './components/BattleView/BattleView';

function App() {

  return (
        <main className="app">
            <Header/>
            <Routes>
                <Route path='/main' element={<MainView/>}/>
                <Route path='/main' element={<BattleView/>}/>
            </Routes>
        </main>
  );
}

export default App;
