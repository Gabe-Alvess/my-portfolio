/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { darkModeSwitch, lightModeSwitch, themeValue } from "../slices/darkModeSlice";

type Props = {};

function Switcher({}: Props) {
  const darkMode = useSelector(themeValue);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3">
      <input type="checkbox" id="toggle" className="input" />
      <label
        htmlFor="toggle"
        className="label"
        onClick={() => {
          if (darkMode === false) {
            dispatch(darkModeSwitch());
          } else {
            dispatch(lightModeSwitch());
          }
        }}
      >
        <img src="/images/sun.svg" alt="sun" className="svg sun" />
        <img src="/images/moon.svg" alt="moon" className="svg moon" />
      </label>
    </div>
  );
}

export default Switcher;
