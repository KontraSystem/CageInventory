import React from "react";
import NavigationBar from "../components/NavigationBar";
import "../App.css";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <div className="wrapper">
        <h2>Home page</h2>
      </div>
    </div>
  );
}
