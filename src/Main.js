import React from 'react';
import { Link } from 'react-router-dom';
import { KeyFeaturePage } from './components/KeyFeaturePage';

export class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row my-5">
            <div className="col-md col-sm-12">
              <div className="display-4 animated slideInLeft">Spending made <b>easy</b></div>
              <p className="mt-3 lead animated slideInLeft">A smart payment card solution that automates expenses and makes your spending simple to manage.</p>
              <Link className="btn btn-success animated slideInLeft" to="/free-trial">Get Started</Link>
            </div>
            <div className="col-md col-sm-12">
              <img className="img-fluid pr-3 animated slideInRight" src={require("./images/landing-main.png")} alt="" />
            </div>
          </div>
          <div className="row mt-6">
            <div className="col">
              <img className="img-fluid d-block mx-auto animated slideInUp" src={require("./images/company-logos.png")} alt="" />
              <p className="text-center mt-3 text-soft mb-5">We save you valuable time by integrating with your accounting platform</p>
            </div>
          </div>
        </div>
        <div className="page-color py-5 px-4">
          <div className="row mb-5">
            <div className="col display-4 text-center">Spend! is perfect for ...</div>
          </div>
          <div className="row">
            <div className="col-md col-sm-12">
              <img className="img-fluid w-75 mb-3 mx-auto d-block" src={require("./images/business-icon.png")} alt="" />
              <h4 className="text-center">Businesses</h4>
              <p className="mt-3 text-center">No matter the size of your business, improving the expense process saves time and money. You can easily issue expense
                cards and manage everything in one place.</p>
            </div>
            <div className="col-md col-sm-12">
              <img className="img-fluid w-75 mb-3 mx-auto d-block" src={require("./images/accountant-icon.png")} alt="" />
              <h4 className="text-center">Accountants &amp; Bookkeepers</h4>
              <p className="mt-3 text-center">Spend helps accountants and bookkeepers by reducing errors and providing seamless real-time recording of expenses into
                existing accounting packages.</p>
            </div>
            <div className="col-md col-sm-12">
              <img className="img-fluid w-75 mb-3 mx-auto d-block" src={require("./images/personal-icon.png")} alt="" />
              <h4 className="text-center">Personal &amp; Families</h4>
              <p className="mt-3 text-center">Individuals can take control of their own and family spending. With better management over their spending, Spend! is
                also the perfect zero-fee travel card.</p>
            </div>
          </div>
        </div>
        <KeyFeaturePage></KeyFeaturePage>
        <div className="container-fluid">
          <div className="row page-color py-5 my-5">
            <div className="col">
              <p className="text-center display-4"><i className="fa fa-bar-chart"></i></p>
              <p className="text-center h3">$7000</p>
              <p className="text-center">per year in expenses for the average expense filer</p>
            </div>
            <div className="col">
              <p className="text-center display-4"><i className="fa fa-window-close"></i></p>
              <p className="text-center h3">75%</p>
              <p className="text-center">of employees admit filing an incorrect expense</p>
            </div>
            <div className="col">
              <p className="text-center display-4"><i className="fa fa-clock-o"></i></p>
              <p className="text-center h3">23%</p>
              <p className="text-center">of salespeople spend over 3 hours per month filing expenses</p>
            </div>
            <div className="col">
              <p className="text-center display-4"><i className="fa fa-plane"></i></p>
              <p className="text-center h3">15%</p>
              <p className="text-center">of average operating expenses are spent on travel &amp; entertainment</p>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-4">
              <img className="img-fluid w-75" src={require("./images/mobile-robot.png")} alt="" />
            </div>
            <div className="col-8">
              <p className="display-4">Simplify expenses and take control</p>
              <p>Take expense automation further with Expend’s combination of app, card and online dashboard. Expend efficiently records your expenses and automatically syncs them with your accounting package.</p>
              <p>No forms or piles of receipts. With closer control over business spending, Expend’s easy solution transforms the frustrating expense claim process and improves your company’s financial efficiency.</p>
            </div>
          </div>
        </div>
    </div>
    );
  }
}
