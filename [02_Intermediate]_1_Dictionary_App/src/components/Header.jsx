import { useState } from "react";

import headerIcon from "../icons/logo.svg";
import dropdownIcon from "../icons/icon-arrow-down.svg";
import lightMoon from "../icons/icon-moon.svg";
import darkMoon from "../icons/icon-moon-dark.svg";

export default function Header() {
  const [toggleOn, setToggleOn] = useState(true);
  const buttonPosition = toggleOn ? "left-[22px]" : "left-[4px]";
  function handleClick() {
    setToggleOn((prevToggle) => !prevToggle);
  }

  let moonIcon = lightMoon;

  // handle html theme
  if (toggleOn) {
    moonIcon = darkMoon;
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // handle font style

  return (
    <div className="h-header-height flex justify-between align-middle">
      <img src={headerIcon} alt="Dictionary app icon" />
      <div className="flex my-auto">
        <button className="flex justify-between w-[120px] mr-8 font-bold text-dark-500 dark:text-white">
          <span>Sans Serif</span>
          <img src={dropdownIcon} alt="dropdown icon" className="my-auto" />
        </button>
        <div className="h-[20px] ml-8 my-auto flex gap-4">
          <button
            className="relative box-border h-full w-[40px] rounded-full bg-gray-700 dark:bg-light-purple"
            onClick={handleClick}
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
