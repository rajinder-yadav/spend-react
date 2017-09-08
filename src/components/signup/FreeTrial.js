import React from 'react';
import {Route} from 'react-router-dom';

import {SignUpPage1} from './SignUpPage1';
import {SignUpPage2} from './SignUpPage2';

import { Footer } from '../common/Footer';

export function FreeTrial({match}) {
  return (
    <div className="component">
      <div className="row">
        <div className="col">
          <img className="img-fluid d-block mx-auto mt-5 mb-3" src={require("../../images/signup/spend-robot-signup.png")} alt="" />
          <p className="text-center">Need more info? Learn how Expend works by clicking here or contact us via our live support (bottom right).</p>
          <p className="display-4 text-center mt-3 mb-5">Please enter your details</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Route exact path={`${match.url}`} component={SignUpPage1} />
          <Route path={`${match.url}/signup2`} component={SignUpPage2} />
        </div>
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
}
