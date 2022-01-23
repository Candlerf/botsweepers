import React from "react";
import App from "../../App";
import "./style.css";
import Gif from "../assets/images/artwork.gif";
import Logo from "../assets/images/logo.png";

export default function Mint() {
  return (
    <header class="masthead my-5">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div
            class="col-12 col-md-6 left"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img src={Logo} alt="" srcset="" className="img-fluid logo" />
            <h1 class="fw-light welcome">Welcome to</h1>
            <h1 class="title">Sol Sweepers</h1>
            <p class="lead">
              SOL Sweepers is a pass to solana minting tools including mint
              bots, floor sweepers, threshold listing and more to come.
            </p>
            <App />
          </div>
          <div
            class="col-12 col-md-6 text-center"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img src={Gif} alt="gif" className="img-fluid" />
          </div>
        </div>{" "}
      </div>
    </header>
  );
}
