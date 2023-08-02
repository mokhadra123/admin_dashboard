import { valueToNode } from "@babel/types";
import { sectionFormatProperty } from "@syncfusion/ej2/documenteditor";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialSate = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialSate);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };
  const handleClick = (clicked) => {
    setIsClicked({ ...initialSate, [clicked]: true });
    setThemeSettings(false);
  };
  const value = {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    setCurrentColor,
    currentMode,
    setCurrentMode,
    setMode,
    setColor,
    themeSettings,
    setThemeSettings,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
