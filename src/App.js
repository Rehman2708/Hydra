import { useState } from "react";
import Info from "./assets/pages/Info/Info";
import Intro from "./assets/pages/Intro/Intro";
import "./App.css";
import WhyHydra from "./assets/pages/WhyBuild/WhyHydra";
function App() {
  return (
    <>
      <Info />
      <Intro />
      <WhyHydra />
    </>
  );
}

export default App;
