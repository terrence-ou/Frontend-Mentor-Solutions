import { useState } from "react";
import Header from "./components/Header.jsx";

function App() {
  const [font, setFont] = useState("serif");

  return (
    <div className={"mx-auto w-page-width mt-[58px] " + `font-${font}`}>
      <Header font={font} setFont={setFont} />
    </div>
  );
}

export default App;
