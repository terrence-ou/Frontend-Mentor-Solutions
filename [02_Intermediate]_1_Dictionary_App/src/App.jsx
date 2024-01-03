import { useState } from "react";
import Header from "./components/Header.jsx";

function App() {
  const [fontType, setFontType] = useState("font-sans");

  return (
    <div className={"mx-auto w-page-width mt-[58px] " + fontType}>
      <Header fontType={fontType} setFontType={setFontType} />
    </div>
  );
}

export default App;
