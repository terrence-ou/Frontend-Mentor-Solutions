import { useState } from "react";

import headerIcon from "../icons/logo.svg";
import dropdownIcon from "../icons/icon-arrow-down.svg";
import lightMoon from "../icons/icon-moon.svg";
import darkMoon from "../icons/icon-moon-dark.svg";

const fontMapping = {
  sans: "Sans Serif",
  serif: "Serif",
  mono: "Mono",
};

export default function Header({ font, setFont }) {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const [fontMenuVisible, setFontMenuVisible] = useState(false);

  const buttonPosition = darkModeOn ? "left-[22px]" : "left-[4px]";
  function handleToggleDarkMode() {
    setDarkModeOn((prevDarkOn) => !prevDarkOn);
  }

  function handleMenuVisibility() {
    setFontMenuVisible((prevVisibility) => !prevVisibility);
  }

  function handleFontSelection(font) {
    setFont(font);
    setFontMenuVisible(false);
  }

  let moonIcon = lightMoon;

  // handle html theme
  if (darkModeOn) {
    moonIcon = darkMoon;
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // handle font style
  function getFontSelections() {
    return (
      <div className="absolute flex flex-col top-[30px] w-40 right-8 p-4 rounded-[1rem] font-semibold bg-white shadow-[0px_6px_16px_rgb(0,0,0,0.1)]">
        {Object.entries(fontMapping).map(([key, item]) => (
          <button
            key={key}
            onClick={() => handleFontSelection(key)}
            className={
              "hover:text-light-purple text-start leading-[24px] py-[8px] duration-200 " +
              `font-${key}`
            }
          >
            {item}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="h-header-height flex justify-between align-middle text-[18px]">
      <img src={headerIcon} alt="Dictionary app icon" />
      <div className="flex my-auto">
        <div className="relative">
          <button
            className="flex justify-end gap-[16px] w-[120px] mr-8 font-bold text-dark-500 dark:text-white"
            onClick={handleMenuVisibility}
          >
            <span>{fontMapping[font]}</span>
            <img src={dropdownIcon} alt="dropdown icon" className="my-auto" />
          </button>
          {fontMenuVisible && getFontSelections()}
        </div>
        <div className="h-[20px] ml-8 my-auto flex gap-4">
          <button
            className="relative box-border h-full w-[40px] rounded-full bg-gray-700 dark:bg-light-purple"
            onClick={handleToggleDarkMode}
          >
            <span
              className={
                "absolute top-[3px] w-[14px] h-[14px] bg-white rounded-full duration-200 " +
                buttonPosition
              }
            ></span>
          </button>
          <img src={moonIcon} alt="dark mode icon" className="inline"></img>
        </div>
      </div>
    </div>
  );
}
