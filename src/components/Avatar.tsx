import Oval from "../assets/Oval.svg";
import { styled } from "styled-components";

const Avatar = () => {
  return (
    <Div>
      <img src={Oval} alt="avatar" />
      <div>
        <h2>The Octocat</h2>
        <h5>@octocat</h5>
        <p>Joined 25 Jan 2011</p>
      </div>
    </Div>
  );
};

export default Avatar;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;
  img {
    max-width: 7rem;
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
  h2 {
    color: #2b3442;
    font-size: 1.6rem;
  }
  h5,
  p {
    color: #0079ff;
    font-size: 1.3rem;
  }
  p {
    color: #697c9a;
  }
  @media (min-width: 768px) {
    gap: 4.1rem;
    img {
      max-width: 11.7rem;
    }
    h2 {
      font-size: 2.6rem;
    }
    h5 {
      font-size: 1.6rem;
      margin: 0.2rem 0 0.4rem 0;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
