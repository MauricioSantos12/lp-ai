import React from "react";
import "../App.scss";
import PartOne from "./partOne";
import PartTwo from "./partTwo";
import PartThree from "./partThree";

export default function Main() {
  return (
    <div className="main">
      <PartOne />
      <PartTwo />
      <PartThree />
    </div>
  );
}
