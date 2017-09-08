import React from 'react';
import { Footer } from './common/Footer';

export function Contact() {
  return (
    <div>
      <div className="container mb-10">
        <div className="row">
          <div className="col">
            <p className="display-4 text-center">Contact Us</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <h2>Customer support</h2>

            <p>Access our live customer support<br/>(bottom right and find help guides at <i className="fa fa-info-circle"></i> help.spend.io)</p>

            <h2>Contacts</h2>

            <p>Customer support: <i className="fa fa-envelope-o"></i> help@spend.io<br/>
            Partner and business enquiries: partnerships@spend.io<br/>
            Media: media@spend.io<br/>
            Investors: investor@spend.io</p>
            <p><i className="fa fa-phone"></i> +1 (416)-123-4567</p>
          </div>
          <div className="col">
          <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <div className="input-group mb-4">
                  <span className="input-group-addon fa fa-user" id="name"></span>
                  <input type="text" className="form-control" id="name" />
                </div>
                <label htmlFor="email">Email</label>
                <div className="input-group">
                  <span className="input-group-addon fa fa-envelope" id="email"></span>
                  <input type="text" className="form-control" id="email" />
                </div>
                <div className="mt-4">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="6"></textarea>
                </div>
                <div className="mt-4">
                  <button className="btn btn-success form-control" type="submit">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="fixed-bottom">
        <Footer></Footer>
      </div>
    </div>
  );
}
