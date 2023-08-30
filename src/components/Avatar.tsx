import { styled } from "styled-components";

interface Props {
  name: string;
  login: string;
  day: string;
  month: string;
  year: string;
  avatar_url: string;
}

const Avatar = ({ name, login, day, month, year, avatar_url }: Props) => {
  const dayData = new Date(day).toLocaleString("en-US", {
    day: "2-digit",
    timeZone: "UTC",
  });

  const yearData = new Date(year).toLocaleString("en-US", {
    year: "numeric",
    timeZone: "UTC",
  });
  const monthData = new Date(month).toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });

  return (
    <Div>
      <img src={avatar_url} alt="avatar" />
      <div>
        <h2>{name}</h2>
        <h5>@{login}</h5>
        <p>
          Joined {dayData} {monthData} {yearData}
        </p>
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
  h5,
  p {
    font-size: 1.3rem;
  }

  @media (min-width: 768px) {
    gap: 4.1rem;
    img {
      max-width: 11.7rem;
    }
    && h5 {
      font-size: 1.6rem;
      margin: 0.2rem 0 0.4rem 0;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
