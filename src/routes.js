import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Index from './pages/Index';
import Despesas from './pages/Despesas';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Index} />
                <Route path='/Despesas' component={Despesas} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;