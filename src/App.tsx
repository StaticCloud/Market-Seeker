import { useState } from "react";
import Dropdown from "./components/Dropdown";
import Content from "./components/Content";
import keywords from "./data/Keywords";

function App() {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <>
      <Dropdown keywords={keywords} selectedKeyword={keyword} setKeyword={setKeyword}/>
      <Content keyword={keyword}></Content>
    </>
  )
}

export default App
