import { styled } from "styled-components";
import MainComponent from "./components/Main";

function App() {
  return (
    <Body>
      <MainComponent />
    </Body>
  );
}

export default App;

const Body = styled.div`
  min-height: 100vh;
  background-color: #f6f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
