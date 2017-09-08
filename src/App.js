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
import { Pricing } from './components/Pricing';
import { Help } from './components/Help';
import ScrollToTop from './ScrollToTop';

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
            </div>
            <Footer></Footer>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
