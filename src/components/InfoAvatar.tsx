import { styled } from "styled-components";

interface Repos {
  title?: string;
  number?: number;
  bio?: string;
  repos?: number;
  follower?: number;
  following?: number;
}

const InfoAvatar = ({ bio, repos, follower, following }: Repos) => {
  return (
    <Div>
      <aside>
        <h5>{bio}</h5>
      </aside>
      <div>
        <RepoInfo title="Repos" number={repos} />
        <RepoInfo title="Followers" number={follower} />
        <RepoInfo title="Following" number={following} />
      </div>
    </Div>
  );
};

const RepoInfo = ({ title, number }: Repos) => {
  return (
    <article>
      <p>{title}</p>
      <h4>{number}</h4>
    </article>
  );
};

export default InfoAvatar;

const Div = styled.div`
  margin-bottom: 2.4rem;
  div {
    text-align: center;
    display: flex;
    justify-content: space-around;
    background-color: #f6f8ff;
    border-radius: 1rem;
    padding: 1.8rem 1.4rem 1.9rem 1.5rem;
  }
  h5 {
    color: #4b6a9b;
    font-size: 1.3rem;
    line-height: 2.5rem;
    margin: 3.3rem 0 2.3rem 0;
    max-width: 49.3rem;
  }
  p {
    font-size: 1.1rem;
    color: #4b6a9b;
  }
  h4 {
    color: #2b3442;
    font-size: 1.6rem;
    margin-top: 0.8rem;
  }
  aside {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    h5 {
      font-size: 1.5rem;
      max-width: 60rem;
    }
    p {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 2.2rem;
    }
  }
`;
