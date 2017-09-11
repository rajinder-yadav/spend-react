import React from 'react';
import {Link} from 'react-router-dom';

export function SignUpPage1({match}) {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col">
          <form>
            <label htmlFor="">How many Spend! cards do think you will need?</label>
            <div className="form-check ml-5">
              <input className="form-check-input" type="radio" name="cards" value="one" /> One (Freelancers and Personal users)
            </div>
            <div className="form-check ml-5">
              <input className="form-check-input" type="radio" name="cards" value="many" /> Multiple (Companies, Teams, Families and
              Accountants)
            </div>
            <label className="mt-4" htmlFor="">What type of user are you?</label>
            <div className="form-check ml-5">
              <input className="form-check-input" type="radio" name="user_type" value="accountant" /> Accountant
            </div>
            <div className="form-check ml-5">
              <input className="form-check-input" type="radio" name="user_type" value="company" /> Company
            </div>
            <div className="form-check ml-5">
              <input className="form-check-input" type="radio" name="user_type" value="Sole Trader" /> Sole Trader
            </div>
            <div className="form-check ml-5">
              <input className="form-check-input" type="radio" name="user_type" value="personal" /> I want a card for personal use
            </div>
            <div className="form-group mt-5">
              <label htmlFor="">Company or Trading name</label>
              <div className="input-group">
                <input type="text" className="form-control" />
                <span className="input-group-addon"><i className="fa fa-star"></i></span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Company Number</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <div className="input-group">
                <input type="text" className="form-control" />
                <span className="input-group-addon"><i className="fa fa-star"></i></span>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="platforms">Accounting Platform</label>
              <select id="platforms" className="form-control">
                <option value="0">--</option>
                <option value="1">Crunch</option>
                <option value="2">Quickbooks</option>
                <option value="3">Sage</option>
                <option value="4">Xero</option>
                <option value="5">Other</option>
                <option value="6">I don't use one</option>
              </select>
            </div>
            <div className="form-group">
              <Link className="btn btn-success" to={`${match.url}/signup2`}>Next</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
