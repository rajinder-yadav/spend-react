import React from 'react';
import {CommonQuestionPage} from './CommonQuestionPage';

export function Pricing() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p className="display-4 text-center animated zoomIn">1 month FREE trial.</p>
            <p className="h2 text-center animated zoomIn">Simple pricing with no nasty tie-ins.</p>
            <p className="lead text-center my-5">Spend! Basic offers a low monthly fee and you only pay for what you use. Spend! Pro is our all-inclusive package that includes all card usage fees¹ and 0% foreign exchange markup on international purchases. Perfect for travellers and people who like to know what they are spending each month.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex align-self-stretch">
            <div className="card">
              <div className="card-header">
                <p className="text-center h3 mb-3">Spend! Basic</p>
                <p className="text-center display-4">$4.99</p>
                <p className="text-center small">per active user per month</p>
              </div>
              <div className="card-body">
                <ul>
                  <li>Free no-obligation trial</li>
                  <li>Contactless Spend! card</li>
                  <li>Spend! mobile and web app</li>
                  <li>Export your data</li>
                  <li>Automatic data entry</li>
                  <li>Real-time reports</li>
                  <li>Digital receipts</li>
                  <li>Easy card management</li>
                </ul>
              </div>
              <div className="m-4">
                <a href="" className="btn btn-primary d-block">Start Your Free Trial</a>
              </div>
            </div>
          </div>
          <div className="col d-flex align-self-stretch">
            <div className="card">
              <div className="card-header bg-primary text-light">
                <p className="text-center h3 mb-3">Spend! Pro</p>
                <p className="text-center display-4">$9.99</p>
                <p className="text-center small">per active user per month</p>
              </div>
              <div className="card-body">
                <p className="text-success text-center"><b>Our all-inclusive package!</b></p>
                <ul>
                  <li><b>All the features of Spend! Business plus:</b></li>
                  <li>0% foreign exchange markup</li>
                  <li>FREE ATM withdrawals</li>
                </ul>
              </div>
              <div className="m-4">
                <a href="" className="btn btn-primary d-block">Start Your Free Trial</a>
              </div>
            </div>
          </div>
          <div className="col d-flex align-self-stretch">
            <div className="card">
              <div className="card-header">
                <p className="text-center h3 mb-3">Spend! Business</p>
                <p className="text-center display-4">$6.99</p>
                <p className="text-center small">per active user per month</p>
              </div>
              <div className="card-body">
                <p className="h5">All the features of Spend! Basic plus:</p>
                <ul>
                  <li>Seamless integration with Xero, Crunch
                      and others<sup>2</sup></li>
                  <li>FREE replacement cards</li>
                </ul>
              </div>
              <div className="m-4">
                <a href="" className="btn btn-primary d-block">Start Your Free Trial</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CommonQuestionPage></CommonQuestionPage>
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <img className="img-fluid d-block mx-auto mb-3" src={require("../images/how-why/talk-bubbles.png")} alt="" />
            <p className="h3 text-center">Need more help?</p>
            <p className="text-center">Find handy guides at help.spend.io. Contact us via our live support (bottom right) or via email at spend.io/contact</p>
            <p className="text-center mt-4"><button className="btn btn-primary">Vist Our Portal</button></p>
          </div>
        </div>
      </div>
    </div>
  );
}
