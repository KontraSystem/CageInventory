import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import SecondNavBar from "../components/SecondNavBar";

export default function Courses() {
  const [navBarClicked, isNavbarClicked] = useState(false);
  const toggleVisibility = () => {
    isNavbarClicked(!navBarClicked);
    console.log(navBarClicked, "navbar clicked");
  };
  return (
    <div
      className={`${navBarClicked ? "grid grid-flow-col auto-cols-min" : ""}`}
    >
      <div className={`${navBarClicked ? "visible" : "hidden"}`}>
        <SecondNavBar />
      </div>
      <div className="w-screen">
        <NavigationBar onClick={toggleVisibility} />
        <div>courses</div>
      </div>
    </div>
  );
}
