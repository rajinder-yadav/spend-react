import React from 'react';
import { Footer } from './common/Footer';

export function Welcome() {
  return (
    <div className="container">
      <div className="row mb-10">
        <div className="col">
          <div className="jumbotron mt-5">
            <h1 className="display-3">Congratulation!</h1>
            <p className="h3">You're Customer 1,000,000</p>
            <p className="lead">You won free service for life!</p>
            <p className="text-small">(*) Taxes and fees may apply.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="fixed-bottom">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}
