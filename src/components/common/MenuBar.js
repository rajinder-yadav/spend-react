import React from 'react';
import { Link } from 'react-router-dom';

export function MenuBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-white fixed-top">
        <Link className="navbar-brand mr-5" to="/">Spend!</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/how-why">How &amp; Why</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">Help</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <Link className="nav-link btn btn-primary text-light" to="/free-trial">Start Free Trail</Link>
        </div>
      </nav>
    </div>
  );
}
