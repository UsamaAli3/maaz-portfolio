import React from "react";
import { Link  } from "react-scroll";
import { Element } from "react-scroll";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
function Layout() {
  return (
     <>
      <nav>
        <Link to="/" smooth className="text-3xl font-medium cursor-pointer ">
          USAMA
        </Link>
        <Link to="about" smooth className="text-3xl font-medium cursor-pointer ">
          About
        </Link>
        <Link to="services" smooth className="text-3xl font-medium cursor-pointer ">
          Services
        </Link>
      </nav>
       <div>
        <Element name="/" className="element">
          <Home />
        </Element>
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="services" className="element">
          <Services />
        </Element>
      </div>
    </>
  );
}

export default Layout;
