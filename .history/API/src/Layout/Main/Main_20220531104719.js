import React from "react";
import Section from "../Section/Section";
import "./Main.css";

function Main() {
  return (
    <div id="main">
      <aside></aside>
      <Section />
      <aside className="R"></aside>
    </div>
  );
}

export default Main;