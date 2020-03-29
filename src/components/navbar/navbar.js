import React from "react";
import style from "./style.css";

function Nav() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <h2>Memory Game</h2>
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <a href="https://github.com/Victord90/" target="blank_">
              <h5 class="text-white h4">Git Hub</h5>
            </a>
            <a
              href="https://linkedin.com/in/victor-dominguez-b444b7191"
              target="blank_"
            >
              <h5 class="text-white h4">LinkedIn</h5>
            </a>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </nav>
  );
}

export default Nav;
