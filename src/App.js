import './App.css';
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
    return (
        //BEM naming convention
        <div className="app">
            <Router>
                <Header/>
                <div className="app_body">
                    <Sidebar/>
                    <Switch>
                        <Route path="/room/:roomId">
                            <h1>CHAT SCREEN</h1>
                            {/*Chat*/}
                        </Route>
                        <Route path="/">
                            <h1>Welcome</h1>
                        </Route>
                    </Switch>

                    {/*React-Router -> Chat screen */}
                </div>
            </Router>
        </div>
    );
}

export default App;
