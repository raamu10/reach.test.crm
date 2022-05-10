import React from 'react';
import {BrowserRouter as Router ,Routes, Route, } from 'react-router-dom';
import User from '../../components/user/userDetails';

const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route path="/getUser" element={<User />}>
                </Route>
            </Routes>
        </Router>

    )
};

export default AppRoute;