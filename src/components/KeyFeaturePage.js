import React from 'react';

export function KeyFeaturePage() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col"><p className="text-center my-5 display-4">Key Features</p></div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <img className="w-50 d-block mx-auto" src={require("../images/clock-icon.png")} alt="" />
          <h4 className="text-center">Save time, money and hassle</h4>
          <p className="text-center">Simplify expense management. Save paperwork, minimise errors and reduce company expenses.</p>
        </div>
        <div className="col-md-4 col-sm-6">
          <img className="w-50 d-block mx-auto" src={require("../images/paper-icon.png")} alt="" />
          <h4 className="text-center">Instant reports and filing</h4>
          <p className="text-center">Real-time reports and automatic filing of company expenses into your favourite accounting package.</p>
        </div>
        <div className="col-md-4 col-sm-6">
          <img className="w-50 d-block mx-auto" src={require("../images/mag-icon.png")} alt="" />
          <h4 className="text-center">Real-time visibility</h4>
          <p className="text-center">mprove company cash flow and spending insight. Track all of your business transactions in real time.</p>
        </div>
        <div className="col-md-4 col-sm-6">
          <img className="w-50 d-block mx-auto" src={require("../images/card-icon.png")} alt="" />
          <h4 className="text-center">Track spending</h4>
          <p className="text-center">Control spending and reduce expense fraud. Allocate budgets, set restrictions, and monitor purchases.</p>
        </div>
        <div className="col-md-4 col-sm-6">
          <img className="w-50 d-block mx-auto" src={require("../images/piggy-icon.png")} alt="" />
          <h4 className="text-center">Smart savings</h4>
          <p className="text-center">No expensive credit card fees, overdraft charges or the need for large banking facilities.</p>
        </div>
        <div className="col-md-4 col-sm-6">
          <img className="w-50 d-block mx-auto" src={require("../images/people-icon.png")} alt="" />
          <h4 className="text-center">Flexible for all employees</h4>
          <p className="text-center">Limit funds to fit your requirements. Perfect for both permanent and temporary staff.</p>
        </div>
      </div>
    </div>
  );
}
