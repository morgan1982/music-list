import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './shared/Header';
import HomePage from './home/HomePage';
import ProfilePage from './account/ProfilePage';
import ToDo from './todos/ToDo';


export default function Template() {

    return (
        <Router>
            <div className="wrapper">
                <Header username="Entropy the god"/>
                <section className="page-content container-fluid">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/todos" component={ToDo} />
                <Route path="/acount/profile/:id" component={ProfilePage} />
                </section>
            </div>
        </Router>

        );
}
