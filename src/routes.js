import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Families from './Components/Families/Families';

export default (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/families" component={Families}/>
    </Switch>
)