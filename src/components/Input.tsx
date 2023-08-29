import { styled } from "styled-components";
import Search from "../assets/Search.svg";

const InputSearch = () => {
  return (
    <Form>
      <div>
        <img src={Search} alt="search icon" />
        <input type="text" placeholder="Search GitHub username…" />
        <button>Search</button>
      </div>
    </Form>
  );
};

export default InputSearch;

const Form = styled.form`
  background-color: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  border-radius: 1.5rem;
  padding: 0.65rem 0.7rem 0.75rem 1.6rem;
  div {
    display: flex;
    justify-content: space-between;
    gap: 0.9rem;
  }
  input {
    width: 100%;
    border: 0;
    outline: 0;
    font-size: 1.3rem;
    line-height: 2.5rem;
    color: #4b6a9b;
  }
  input::placeholder {
    color: #4b6a9b;
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
  }
`;
