import React from "react";
import "./app.scss";
import { Title } from "@shared/ui/Title/Title";
import { Slider } from "@widgets/Slider/ui/Slider";

const App: React.FC = () => {
  return (
    <main className="app_wrapper">
      <Title />
      <Slider />
    </main>
  );
};

export default App;
