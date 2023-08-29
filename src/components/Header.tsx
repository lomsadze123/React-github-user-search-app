import Sun from "../assets/Sun.svg";
import Moon from "../assets/Moon.svg";
import { styled } from "styled-components";

const HeaderComponent = () => {
  return (
    <Header>
      <h1>devfinder</h1>
      <div>
        <h4>dark</h4>
        {true ? <img src={Moon} alt="moon" /> : <img src={Sun} alt="sun" />}
      </div>
    </Header>
  );
};

export default HeaderComponent;

const Header = styled.header`
  margin-bottom: 3.6rem;
  &,
  div {
    display: flex;
    justify-content: space-between;
  }
  div {
    align-items: center;
    gap: 1.6rem;
  }
  h1 {
    color: #222731;
    font-size: 2.6rem;
  }
  h4 {
    color: #4b6a9b;
    font-size: 1.3rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    div:hover {
      cursor: pointer;
    }
  }
`;
