import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Welcome from './Welcome/Welcome'
import Login from './Login/Login'
import Join from './Join/Join'
import Chat from './Chat/Chat'
import User from '../provider/User'
import { useUser } from "../provider/User";


function App() {
    // const { currentUser } = useUser();
    return (
        // <User>
            <Router>
                <Route path="/" exact component={Welcome} />
                <Route path="/auth/login" component={Login} />
                <Route path="/join" exact component={Join} />
                <Route path="/chat" component={Chat} />
            </Router>
        // </User>
    );
}

export default App;
