import React, { useState } from "react";
import useWindowSize from "../helper/windowSize";

const Link = (props) => {
  return <a href={props.refer}>{props.text}</a>;
};
/////////////////////////////////
const Header = (props) => {
  const { width } = useWindowSize();

  const visualHeight = window.innerHeight / 100;
  const [position, setPosition] = useState(true);
  let scrolling = false;
  window.addEventListener("scroll", () => {
    scrolling = true;
  });

  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      // place the scroll handling logic here
      if (Math.round(window.scrollY) < visualHeight * 85) {
        setPosition(true);
      } else if (
        Math.round(window.scrollY) > visualHeight * 85 &&
        Math.round(window.scrollY) < visualHeight * 190
      ) {
        setPosition(false);
      } else if (
        Math.round(window.scrollY) > visualHeight * 190 &&
        Math.round(window.scrollY) < visualHeight * 304
      ) {
        setPosition(true);
      } else if (
        Math.round(window.scrollY) > visualHeight * 304 &&
        Math.round(window.scrollY) < visualHeight * 410
      ) {
        setPosition(false);
      } else if (
        Math.round(window.scrollY) > visualHeight * 420 &&
        Math.round(window.scrollY) < visualHeight * 640
      ) {
        setPosition(false);
      } else if (
        Math.round(window.scrollY) > visualHeight * 650
      ) {
        setPosition(true);
      }
    }

  }, 500);



  return (
    <header style={{ color: position ? '#f4f4f4' : '#2d2d30' }}>
      <>
      {/* windows size > 500px */}
      {width > 500 &&(
        <div>
          <Link text="Home" refer="#home" />
          <Link text="About" refer="#about" />
          <Link text="Services" refer="#services" />
        </div>
      )}
      {/* Visible for ani width*/}
      {width < 500 &&(
        <p>xd</p>
      )}
      </>
    </header>
  );
};

export default Header;
