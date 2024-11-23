import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/users" component={UserManagement} />
          <Route path="/roles" component={RoleManagement} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
