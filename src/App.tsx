import React from 'react';
import {MainView} from "./components/MainView/MainView";
import {Route, Routes} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Provider} from 'react-redux';

import './App.css';
import {BattleView} from './components/BattleView/BattleView';
import {store} from "./store";
import { NotFound } from './components/NotFound/NotFound';


function App() {

    return (
        <main className="app">
            <Provider store={store}>
                <Header/>
                <Routes>
                    <Route path='/main' element={<MainView/>}/>
                    <Route path='/battle' element={<BattleView/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Provider>
        </main>
    );
}

export default App;
