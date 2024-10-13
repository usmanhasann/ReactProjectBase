import React from "react";
import "../css/Reactprojectbase.css";
export const HandleEvent = () => {
  const makesure = () => {
    alert("i will make sure of it bro ");
  };
  const datetoday = () => {
    alert("today is 10/13/2024");
  };
  const maxchallenge = () => {
    alert("i will do this in this weekend in sha Allah");
  };
  return (
    <div>
      <h1>Events in react: (video:01)</h1>
      <br />
      <br />

      <button className="motivation" onClick={makesure}>
        Dont give up Allah is with you
      </button>
      <br />
      <br />
      <button className="motivation" onClick={datetoday}>
        click to know what date it is{" "}
      </button>
      <br />
      <br />
      <button className="motivation" onClick={maxchallenge}>
        clik to know how in how much days you will learn the React{" "}
      </button>
    </div>
  );
};
export default HandleEvent;
