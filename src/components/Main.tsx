import { styled } from "styled-components";
import Avatar from "./Avatar";
import InfoAvatar from "./InfoAvatar";
import Contacts from "./Contacts";

interface Props {
  name: string;
  login: string;
  day: string;
  month: string;
  year: string;
  avatar_url: string;
  bio: string;
  repos?: number;
  follower?: number;
  following?: number;
  location: string;
  blog: string;
  twitter: string;
  company: string;
  mode: string;
}

const MainComponent = ({
  name,
  login,
  day,
  month,
  year,
  avatar_url,
  bio,
  repos,
  follower,
  following,
  location,
  blog,
  twitter,
  company,
  mode,
}: Props) => {
  return (
    <Main about={mode === "dark" ? false : true}>
      <Avatar
        name={name}
        login={login}
        day={day}
        month={month}
        year={year}
        avatar_url={avatar_url}
      />
      <InfoAvatar
        bio={bio}
        repos={repos}
        follower={follower}
        following={following}
      />
      <Contacts
        location={location}
        blog={blog}
        twitter={twitter}
        company={company}
      />
    </Main>
  );
};

export default MainComponent;

const Main = styled.main<{ about: boolean }>`
  padding: 0 2.4rem;
  background-color: ${(props) => (props.about ? "#fefefe" : "#1E2A47")};
  box-shadow: ${(props) =>
    props.about ? "0px 16px 30px -10px rgba(70, 96, 187, 0.2)" : ""};
  margin-top: 1.6rem;
  border-radius: 1.5rem;
  padding: 3.2rem 2.4rem 4.8rem 2.4rem;
  h4 + img,
  form div img {
    max-width: 2rem;
    width: 100%;
    height: auto;
  }
  h2 {
    color: ${(props) => (props.about ? "#2b3442" : "#FFFFFF")};
    font-size: 1.6rem;
  }
  div div h5,
  p {
    color: #0079ff;
  }
  p {
    color: ${(props) => (props.about ? "#697c9a" : "#FFFFFF")};
  }
  aside h5,
  h4 {
    color: ${(props) => (props.about ? "#4B6A9B" : "#FFF")};
  }
  aside + div {
    background-color: ${(props) => (props.about ? "#F6F8FF" : "#141D2F")};
  }

  @media (min-width: 768px) {
    padding: 4rem;
    min-width: 68rem;
    form div img {
      max-width: 2.41rem;
    }
    h2 {
      font-size: 2.6rem;
    }
  }
`;
