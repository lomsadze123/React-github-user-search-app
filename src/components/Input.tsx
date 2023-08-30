import { styled } from "styled-components";
import Search from "../assets/Search.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "./DATATypes";
import MainComponent from "./Main";

const InputSearch = ({ mode }: { mode: string }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<string>("lomsadze123");
  const [notFound, setNotFound] = useState(false);

  const githubRequests = async (username: string | null) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const data = response.data;
      setUser(data);
      setNotFound(false);
      setUserData("");
    } catch (error) {
      console.log("Error fetching username:", error);
      setNotFound(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userData !== "") {
      githubRequests(userData);
    }
  };

  useEffect(() => {
    githubRequests(userData);
  }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit} about={mode === "dark" ? false : true}>
        <div>
          <img src={Search} alt="search icon" />
          <input
            type="text"
            placeholder="Search GitHub username…"
            onChange={(e) => {
              setUserData(e.currentTarget.value);
            }}
            value={userData}
          />
          {notFound && <h2>No results</h2>}
          <button>Search</button>
        </div>
      </Form>
      <MainComponent
        name={user?.name === null ? userData : user?.name ?? ""}
        login={user?.login ?? ""}
        day={user?.created_at ?? ""}
        month={user?.created_at ?? ""}
        year={user?.created_at ?? ""}
        avatar_url={user?.avatar_url ?? ""}
        bio={user?.bio ?? "This profile has no bio"}
        repos={user?.public_repos ?? 0}
        follower={user?.followers ?? 0}
        following={user?.following ?? 0}
        location={user?.location ?? "Not Available"}
        blog={user?.blog === "" ? "Not Available" : user?.blog ?? ""}
        twitter={user?.twitter_username ?? "Not Available"}
        company={user?.company ?? "Not Available"}
        mode={mode}
      />{" "}
      {/* this checks on null or
      undefined */}
    </div>
  );
};

export default InputSearch;

const Form = styled.form<{ about: boolean }>`
  background-color: ${(props) => (props.about ? "#fefefe" : "#1E2A47")};
  box-shadow: ${(props) =>
    props.about ? "0px 16px 30px -10px rgba(70, 96, 187, 0.2)" : ""};
  border-radius: 1.5rem;
  padding: 0.65rem 0.7rem 0.75rem 1.6rem;
  div {
    display: flex;
    justify-content: space-between;
    gap: 0.9rem;
    position: relative;
  }
  input {
    background-color: ${(props) => (props.about ? "#fefefe" : "#1E2A47")};
    width: 100%;
    border: 0;
    outline: 0;
    font-size: 1.3rem;
    line-height: 2.5rem;
    color: ${(props) => (props.about ? "#4b6a9b" : "#FFFFFF")};
  }
  input::placeholder {
    color: ${(props) => (props.about ? "#4b6a9b" : "#FFFFFF")};
    font-weight: 400;
  }
  button {
    background-color: #0079ff;
    border: 0;
    border-radius: 1rem;
    color: #fff;
    font-size: 1.4rem;
    padding: 1.25rem 1.4rem 1.25rem 1.8rem;
  }
  h2 {
    color: rgb(247 70 70);
    font-size: 1.3rem;
    position: absolute;
    top: 1.1rem;
    right: 9rem;
  }

  @media (min-width: 768px) {
    padding: 0.95rem 1rem 0.95rem 3.2rem;
    input {
      font-size: 1.8rem;
    }
    button {
      font-size: 1.6rem;
      padding: 1.25rem 2.3rem 1.35rem 2.4rem;
      cursor: pointer;
    }
    img {
      margin-right: 1.1rem;
    }
    button:hover {
      background-color: #60abff;
    }
    h2 {
      font-size: 1.6rem;
      right: 12rem;
    }
  }
`;
