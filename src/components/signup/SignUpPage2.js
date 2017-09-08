import React from 'react';
import {Link} from 'react-router-dom';

export function SignUpPage2({match}) {
  return (
<div className="container">
  <div className="row mb-5">
    <div className="col">
      <form>
        <div className="form-group">
          <label htmlFor="name">First name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname</label>
          <input type="text" className="form-control" id="surname" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input type="text" className="form-control" id="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of birth</label>
          <input type="text" className="form-control" id="dob" />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country of redience</label>
          <select id="country" className="form-control">
            <option value="0">--</option>
            <option value="1">Canada</option>
            <option value="2">USA</option>
          </select>
        </div>
        <div>
          <Link className="btn btn-success" to="/free-trial">Back</Link> <Link className="btn btn-success" to="/welcome">Submit</Link>
        </div>
      </form>
    </div>
  </div>
</div>
  );
}
