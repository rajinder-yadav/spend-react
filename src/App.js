import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import 'animate.css/animate.min.css';

import './App.css';
import { Main } from './Main';
import { MenuBar } from './components/common/MenuBar';
import { Footer } from './components/common/Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <MenuBar></MenuBar>
          <div className="navbar-gap">
            <Route exact path="" component={Main} />
          </div>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
