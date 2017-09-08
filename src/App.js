import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import 'animate.css/animate.min.css';

import './App.css';
import { Main } from './Main';
import { MenuBar } from './components/common/MenuBar';
import { HowAndWhy } from './components/HowAndWhy';
import { Pricing } from './components/Pricing';
import { Help } from './components/Help';
import ScrollToTop from './ScrollToTop';
import { Contact } from './components/Contact';
import { FreeTrial } from './components/signup/FreeTrial';
import { Welcome } from './components/Welcome';

class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <MenuBar></MenuBar>
            <div className="navbar-gap">
              <Route exact path="/" component={Main} />
              <Route path="/how-why" component={HowAndWhy} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/help" component={Help} />
              <Route path="/contact" component={Contact} />
              <Route path="/free-trial" component={FreeTrial} />
              <Route path="/welcome" component={Welcome} />
            </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
