import React from "react";
//// import { generateUUID } from "../utils/generals";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Entrancy } from './route-entrancy';
import { ActionAsync } from './route-action-async';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/entrancy" >Entrancy</Link>
                        {' | '}
                        <Link to="/asyncActions" >Akcje asynchroniczne</Link>
                        {' '}
                    </nav>
                    <div>
                        <Route path="/entrancy" component={()=>(<Entrancy />)}></Route>
                        <Route path="/asyncActions" component={()=>(<ActionAsync />)}></Route>
                    </div>
                </div>
            </Router>
        );
    }
}