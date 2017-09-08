import React from 'react';
import {Link} from 'react-router-dom';
import {KeyFeaturePage} from './KeyFeaturePage';
import {CommonQuestionPage} from './CommonQuestionPage';
import { Footer } from './common/Footer';

export function HowAndWhy() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="display-4 text-center animated slideInDown">How Spend! works for you</p>
            <p className="lead text-center">Remove the pain of recording and managing your expenses. Forget about filling in forms, dealing with receipts, and not knowing what is being spent. Simply pay for your expenses with your Spend! card and let Spend! do the rest.</p>
            <img className="img-fluid d-block mx-auto animated slideInUp" src={require("../images/spend-flow.png")} alt="" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-sm-4">
            <p className="text-center"><i className="fa fa-bolt fa-4x icon-gold" aria-hidden="true"></i></p>
            <p className="h4 text-center">Super efficent</p>
            <p className="lead text-center">A real-time company offering a first-class integration with your accounting software.</p>
          </div>
          <div className="col-12 col-sm-4">
            <p className="text-center"><i className="fa fa-check fa-4x icon-gold" aria-hidden="true"></i></p>
            <p className="h4 text-center">You're in control</p>
            <p className="lead text-center">Simple pricing, with no hidden fees or nasty tie-ins. Plus a no obligation free trial.</p>
          </div>
          <div className="col-12 col-sm-4">
            <p className="text-center"><i className="fa fa-plane fa-4x icon-gold" aria-hidden="true"></i></p>
            <p className="h4 text-center">Travel friendly</p>
            <p className="lead text-center">No transaction fee's and free to use abroad with 0% markup on foreign purchases.</p>
          </div>
        </div>
      </div>
      <div className="page-color py-5 mt-5">
        <div className="row">
          <div className="col">
            <img className="w-50 d-block mx-auto my-5" src={require("../images/how-why/spend-robot.png")} alt="" />
            <p className="display-4 text-center mb-4">We'll do the heavy lifting</p>
            <p className="lead text-center">With Spend!, the transaction information is instantly captured in the app, ready to review and submit. Everything is automatically synced to your accounting package, saving time, removing errors and reducing hassle, so that you can get on with doing the work that really matters.</p>
            <p className="text-center mt-3"><button className="btn btn-primary">Vist Our Help Portal</button></p>
          </div>
        </div>
      </div>
      <KeyFeaturePage></KeyFeaturePage>
      <div className="page-color p-5 mt-5">
        <div className="row py-5">
          <div className="col-8">
            <p className="display-4">Your expenses made easy</p>
            <p className="lead">No more hours spent on manual form filling and sky-high piles of receipts. Our easy expensing solution works with a payment card, mobile app and online dashboard to save you time and offer closer control on business spending. Travel smart with Spend's 0% foreign exchange markup for money-saving spending anywhere in the world.</p>
          </div>
          <div className="col-4">
            <img className="img-fluid" src={require("../images/how-why/mobile-1.png")} alt="" />
          </div>
        </div>
        <div className="row py-5">
          <div className="col-4">
            <img className="img-fluid" src={require("../images/how-why/mobile-2.png")} alt="" />
          </div>
          <div className="col-8">
            <p className="display-4">Increase business efficiency</p>
            <p className="lead">Top up and pay with your Spend! card to trigger real-time payment notifications ready for you to expense. No more form filling or tracking down lost receipts. Spend! is powered by an accounting focused financial system which lets you get on with running your business. Use our online dashboard to easily order, monitor and manage your cards.</p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <CommonQuestionPage></CommonQuestionPage>
      </div>
      <div className="page-color p-5 mt-5">
        <div className="row py-5">
          <div className="col">
            <p className="display-4 text-center">What people are saying!</p>
            <img className="img-fluid d-block mx-auto" src={require("../images/how-why/talk-bubbles.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col">
            <p className="display-4 text-center">
              What are you waiting for?
            </p>
            <p className="lead text-center">Find a handy selection of help guides at help.spend.io. Contact us via our live support (bottom right) or via spend.io/contact</p>

            <p className="lead text-center">Try Spend! for free and enjoy a lifetime of easy expenses</p>
            <p className="text-center"><Link className="btn btn-primary" to="/free-trial">Start You Free Trail</Link></p>
            <img className="img-fluid d-block mx-auto pt-5" src={require("../images/how-why/spend-robot-card.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
}
