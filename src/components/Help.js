import React from 'react';
import './Help.css';

export function Help() {
  return (
    <div>
      <div className="page-color p-5">
        <p className="h2 mb-3">Spend!</p>
          <p className="lead mb-4">Advice and answers from the Spend! team.</p>
          <div className="input-group">
            <input className="w-100 p-3 bg-secondary text-light" placeholder="Search for answers..." type="text" />
            <span className="input-group-addon" id="basic-addon2"><i className="fa fa-search display-4"></i></span>
          </div>
      </div>
      <div className="body-color">
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <div className="media bg-light border border-primary rounded">
                <img className="d-flex align-self-center mr-5 ml-4" src={require("../images/help/book-icon.png")} alt="" />
                <div className="media-body">
                  <h5 className="mt-3">Spend! Card</h5>
                  <p>Everything about Spend! card</p>
                  <img className="help-img mb-3" src={require("../images/help/raj.jpeg")} alt="" /> Written by Raj - 10 article in this collection
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mt-3">
              <div className="media bg-light border border-primary rounded">
                <img className="d-flex align-self-center mr-5 ml-4" src={require("../images/help/book-icon.png")} alt="" />
                <div className="media-body">
                  <h5 className="mt-3">Basics</h5>
                  <p>Gettings started with Spend!</p>
                  <img className="help-img mb-3" src={require("../images/help/raj.jpeg")} alt="" /> Written by Raj - 6 article in this collection
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mt-3 mb-5">
              <div className="media bg-light border border-primary rounded">
                <img className="d-flex align-self-center mr-5 ml-4" src={require("../images/help/book-icon.png")} alt="" />
                <div className="media-body">
                  <h5 className="mt-3">Salesforce</h5>
                  <p>Intergrating Spend! with Saleforce</p>
                  <img className="help-img mb-3" src={require("../images/help/raj.jpeg")} alt="" /> Written by Raj - 4 article in this collection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
