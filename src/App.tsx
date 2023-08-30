import { styled } from "styled-components";
import InputSearch from "./components/Input";
import HeaderComponent from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const localMode = localStorage.getItem("mode");

  if (localMode === null) {
    localStorage.setItem("mode", "light");
  }

  useEffect(() => {
    localMode && setMode(localMode);
  }, []);

  const handleSwitch = () => {
    if (localMode === "light") {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "dark");
      setMode("dark");
    } else {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "light");
      setMode("light");
    }
  };

  return (
    <Body about={mode === "dark" ? false : true}>
      <section>
        <HeaderComponent handleSwitch={handleSwitch} mode={mode} />
        <InputSearch mode={mode} />
      </section>
    </Body>
  );
}

export default App;

const Body = styled.div<{ about: boolean }>`
  min-height: 100vh;
  background-color: ${(props) => (props.about ? "#f6f8ff" : "#141d2f")};
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  section {
    padding: 0 2.4rem;
  }
`;
