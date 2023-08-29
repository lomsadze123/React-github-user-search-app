import { styled } from "styled-components";
import HeaderComponent from "./Header";
import InputSearch from "./Input";
import Avatar from "./Avatar";
import InfoAvatar from "./InfoAvatar";
import Contacts from "./Contacts";

const MainComponent = () => {
  return (
    <Main>
      <HeaderComponent />
      <InputSearch />
      <section>
        <Avatar />
        <InfoAvatar />
        <Contacts />
      </section>
    </Main>
  );
};

export default MainComponent;

const Main = styled.main`
  padding: 0 2.4rem;
  h4 + img,
  form div img {
    max-width: 2rem;
    width: 100%;
    height: auto;
  }

  section {
    background-color: #fefefe;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
    margin-top: 1.6rem;
    border-radius: 1.5rem;
    padding: 3.2rem 2.4rem 4.8rem 2.4rem;
  }

  @media (min-width: 768px) {
    form div img {
      max-width: 2.41rem;
    }
    section {
      padding: 4rem;
      min-width: 68rem;
    }
  }
`;
