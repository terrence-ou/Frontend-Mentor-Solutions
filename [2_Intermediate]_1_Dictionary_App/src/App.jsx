import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import DictResult from "./components/DictResult.jsx";

import { requestDictResult } from "./http.js";

function App() {
  const [fontType, setFontType] = useState("font-sans");
  const [dictContent, setDictContent] = useState(undefined);
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    async function getResult() {
      try {
        const output = await fetch(
          "https://api.dictionaryapi.dev/api/v2/entries/en/keyboard",
        ).then((data) => data.json());
        setResult(output);
      } catch (error) {
        console.error(err);
      }
    }

    getResult();
  }, []);

  return (
    <div className={"mx-auto w-page-width mt-[58px] " + fontType}>
      <Header fontType={fontType} setFontType={setFontType} />
      <Input />
      {result && <DictResult result={result} />}
    </div>
  );
}

export default App;
