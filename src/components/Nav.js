import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Rythm</h1>
      <button
        onClick={() => setLibraryStatus(!libraryStatus)}
        className={libraryStatus ? "button-clicked" : ""}
      >
        Song Library <FontAwesomeIcon icon={faMusic} />{" "}
      </button>
    </nav>
  );
};

export default Nav;
