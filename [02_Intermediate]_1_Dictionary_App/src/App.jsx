import { useState } from "react";
import Header from "./components/Header.jsx";

function App() {
  const [font, setFont] = useState("sans");

  return (
    <div className={"mx-auto w-page-width mt-[58px] " + `font-${font}`}>
      <Header setFont={setFont} />
    </div>
  );
}

export default App;
