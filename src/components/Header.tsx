import Sun from "../assets/Sun.svg";
import Moon from "../assets/Moon.svg";
import { styled } from "styled-components";

const HeaderComponent = ({
  handleSwitch,
  mode,
}: {
  handleSwitch: () => void;
  mode: string;
}) => {
  return (
    <Header about={mode === "dark" ? false : true}>
      <h1>devfinder</h1>
      <button onClick={handleSwitch}>
        <h4 about={mode === "dark" ? false : true}>
          {mode === "dark" ? "light" : "dark"}
        </h4>
        {mode === "light" ? (
          <img src={Moon} alt="moon" />
        ) : (
          <img src={Sun} alt="sun" />
        )}
      </button>
    </Header>
  );
};

export default HeaderComponent;

const Header = styled.header<{ about: boolean }>`
  margin-bottom: 3.6rem;
  &,
  button {
    display: flex;
    justify-content: space-between;
  }
  button {
    align-items: center;
    gap: 1.6rem;
    border: 0;
    background-color: transparent;
  }
  h1 {
    color: ${(props) => (props.about ? "#222731" : "#FFFFFF")};
    font-size: 2.6rem;
  }
  h4 {
    color: ${(props) => (props.about ? "#4b6a9b" : "#FFFFFF")};
    font-size: 1.3rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    button:hover {
      cursor: pointer;
    }
  }
`;
