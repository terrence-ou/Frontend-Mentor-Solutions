import { useState } from "react";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";

function App() {
  const [fontType, setFontType] = useState("font-sans");
  // const [result, setResult] = useState(undefined);
  //
  // useEffect(() => {
  //   async function getResult() {
  //     try {
  //       const output = await fetch(
  //         "https://api.dictionaryapi.dev/api/v2/entries/en/shut",
  //       ).then((data) => data.json());
  //       setResult(output);
  //     } catch (error) {
  //       console.error(err);
  //     }
  //   }
  //
  //   getResult();
  // }, []);
  //
  // console.log(result);
  //
  console.log("test");
  return (
    <div className={"mx-auto w-page-width mt-[58px] " + fontType}>
      <Header fontType={fontType} setFontType={setFontType} />
      <Input />
    </div>
  );
}

export default App;
