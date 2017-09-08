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
import { HowAndWhy } from './components/HowAndWhy';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <MenuBar></MenuBar>
          <div className="navbar-gap">
            <Route exact path="/" component={Main} />
            <Route path="/how-why" component={HowAndWhy} />
          </div>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
