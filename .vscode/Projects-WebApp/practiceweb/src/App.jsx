import { React, useState } from "react";
import NavCss from "./Nav.css";

export function App() {
  return (
    <div>
      <div>
        <p>Developing Innovative Strategies</p>
        <h1>ACHIEVING GROWTH</h1>
        <button>Book A Consultation</button>
      </div>
      <div>
        <div>
          <h1>SERVICES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti dicta ipsum vero voluptatem neque laborum veritatis ipsa,
            rem ut ullam dolor voluptatibus ratione tempora nihil sunt nostrum
            quisquam impedit cum saepe quaerat? Libero aspernatur provident
            fugiat. Debitis, accusantium laboriosam sequi illum perferendis
            officiis eius? Laudantium ut reiciendis similique mollitia.
          </p>
          <button>More Info</button>
        </div>
        <div>
          <h1>PROJECTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti dicta ipsum vero voluptatem neque laborum veritatis ipsa,
            rem ut ullam dolor voluptatibus ratione tempora nihil sunt nostrum
            quisquam impedit cum saepe quaerat? Libero aspernatur provident
            fugiat. Debitis, accusantium laboriosam sequi illum perferendis
            officiis eius? Laudantium ut reiciendis similique mollitia.
          </p>
          <button>More Info</button>
        </div>
        <div>
          <h1>CLIENTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corrupti dicta ipsum vero voluptatem neque laborum veritatis ipsa,
            rem ut ullam dolor voluptatibus ratione tempora nihil sunt nostrum
            quisquam impedit cum saepe quaerat? Libero aspernatur provident
            fugiat. Debitis, accusantium laboriosam sequi illum perferendis
            officiis eius? Laudantium ut reiciendis similique mollitia.
          </p>
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  return (
    <div>
      <h1>SANIDHYA CONSULTING</h1>
      <ul>
        <li className="links" id="link-1">
          <a href="#">About</a>
        </li>
        <li className="links" id="link-2">
          <a href="#">Projects</a>
        </li>
        <li className="links" id="link-3">
          <a href="#">Services</a>
        </li>
        <li className="links" id="link-4">
          <a href="#">Plan & Pricing</a>
        </li>
        <li className="links" id="link-5">
          <a href="#">Tool & Tips</a>
        </li>
        <li className="links" id="link-6">
          <a href="#">Contact</a>
        </li>
        <li>
          <label for="log">
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/account-1779372-1512648.png?f=avif&w=256"
              alt="img"
            />
          </label>
          <a href="" id="log">
            Log In
          </a>
        </li>
      </ul>
    </div>
  );
}
