import React from "react";
import homeImg from '../images/graph-man.svg'

export function Home() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6 pt-5">
          <h1 id="home-heading">World Class CRM Available Now!!</h1><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

          <p className="call-to-action">Find out how our products and services can help you and your team meet your customer management goals!</p>

          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>
        <div className="col-sm-6">
          <img src={homeImg} alt="" />
        </div>
      </div>
    </div>
  );
}
