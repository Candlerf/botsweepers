import React from "react";
import Twitter from "../assets/images/twitter.png";
import "./style.css";

export default function Footer() {
  return (
    <div className="text-center sticky-bottom footer ">
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg  m-1"
            href="https://twitter.com/SolSweepers_NFT"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <img src={Twitter} alt="" className="img-fluid img-twitter" />
          </a>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "white" }}
      >
        © 2022 Copyright: SOL Sweepers
      </div>
    </div>
  );
}
