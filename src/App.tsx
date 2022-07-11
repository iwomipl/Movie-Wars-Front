import React from 'react';
import {MainView} from "./components/MainView/MainView";
import {Route, Routes} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Provider} from 'react-redux';

import './App.css';
import {BattleView} from './components/BattleView/BattleView';
import {store} from "./store";


function App() {

    return (
        <main className="app">
            <Provider store={store}>
                <Header/>
                <Routes>
                    <Route path='/main' element={<MainView/>}/>
                    <Route path='/battle' element={<BattleView/>}/>
                </Routes>
            </Provider>
        </main>
    );
}

export default App;
