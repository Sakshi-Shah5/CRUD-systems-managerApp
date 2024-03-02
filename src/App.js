import React, { useState } from 'react'
import './App.less'
import System from './components/Screens/System'
import CreateNewSystem   from './components/Screens/CreateNewSystem'
import EditSystem from './components/Screens/EditSystem'
import SystemTable from './components/Screens/SystemTable'
import {
    BrowserRouter as Router,
    Switch, Route,
} from 'react-router-dom'

// Routing to the different screens

const App = () => {
    const [systems, setSystems] = useState([])
    return (
        <Router>
            <Switch>
                <Route exact path='/systems'>
                    <SystemTable systems={systems} setSystems={setSystems}/>
                </Route>
                <Route exact path='/systems/create'>
                    <CreateNewSystem systems={systems} setSystems={setSystems}/>
                </Route>
                <Route exact path='/systems/edit/:sysid'>
                    <EditSystem />
                </Route>
                <Route exact path='/systems/:sysid'>
                    <System systems={systems} setSystems={setSystems}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
