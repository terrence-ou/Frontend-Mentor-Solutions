import { useState } from "react";

import headerIcon from "../icons/logo.svg";
import dropdownIcon from "../icons/icon-arrow-down.svg";

export default function Header() {
  const [toggleOn, setToggleOn] = useState(true);
  const buttonPosition = toggleOn ? "left-[22px]" : "left-[4px]";
  function handleClick() {
    setToggleOn((prevToggle) => !prevToggle);
  }

  return (
    <div className="h-header-height flex justify-between align-middle">
      <img src={headerIcon} alt="Dictionary app icon" />
      <div className="flex my-auto">
        <button className="flex justify-between w-[120px] font-bold">
          <span>Sans Serif</span>
          <img src={dropdownIcon} alt="dropdown icon" className="my-auto" />
        </button>
        <div className="h-[20px]">
          <div className="relative box-border h-full w-[40px] rounded-full bg-gray-700">
            <button
              className={
                "absolute top-[3px] w-[14px] h-[14px] bg-white rounded-full duration-200 " +
                buttonPosition
              }
              onClick={handleClick}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
