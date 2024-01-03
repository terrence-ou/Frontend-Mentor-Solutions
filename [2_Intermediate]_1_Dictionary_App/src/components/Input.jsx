import { useState, useEffect } from "react";

import searchIcon from "../assets/icons/icon-search.svg";

export default function Input() {
  const [inputValid, setInputValid] = useState(true);

  function handleSubmission(event) {
    event.preventDefault();
  }

  return (
    <form
      className="relative z-10"
      onSubmit={(event) => handleSubmission(event)}
    >
      <input
        className="box-border my-7 px-6 h-16 w-full rounded-xl bg-gray-300 dark:bg-dark-700 text-[20px] text-dark-500 dark:text-white font-semibold tracking-wide focus:outline focus:outline-light-purple"
        placeholder="Search for any word..."
      ></input>
      <button className="absolute w-4 right-5 top-[52px]">
        <img src={searchIcon} alt="search button icon" />
      </button>
    </form>
  );
}
