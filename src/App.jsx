import React from "react";
import Header from "./components/header";
import Slider from "./components/Slider";
import Introduse from "./components/Introduse";
import Why from "./components/Why";
import Area from "./components/Area";
import Clients from "./components/Clients";

function App() {
  return (
    <>
      <div className="bg-zinc-800">
        <Header />
        <Slider />
        <Introduse />
        <Why />
        <Area />
        <Clients />
      </div>
    </>
  );
}

export default App;
