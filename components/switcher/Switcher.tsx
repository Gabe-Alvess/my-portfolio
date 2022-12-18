/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { darkTheme, lightTheme, themeState } from "../../slices/darkModeSlice";

type Props = {};

export const Switcher = ({}: Props) => {
  const darkMode = useSelector(themeState);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3">
      <input type="checkbox" id="toggle" className="input" defaultChecked />
      <label
        htmlFor="toggle"
        className="label"
        onClick={() => {
          if (darkMode === false) {
            dispatch(darkTheme());
          } else {
            dispatch(lightTheme());
          }
        }}
      >
        <img src="/images/sun.svg" alt="sun" className="svg sun" />
        <img src="/images/moon.svg" alt="moon" className="svg moon" />
      </label>
    </div>
  );
};
