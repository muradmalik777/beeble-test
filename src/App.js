import React, {useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddItems from './pages/AddItems';
import Items from './pages/Items';

const App = () => {

  useEffect(() => {
    document.title = "Beeble | Test"
  })
  
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route path={'/addItem'} component={AddItems}/>
          <Route path={'/'} component={Items} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;