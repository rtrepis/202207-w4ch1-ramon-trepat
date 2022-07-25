import { Key } from "react";

interface Man {
  id: Key;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
}

const Card = (): JSX.Element => {
  const man1: Man = {
    id: 1,
    name: "Bertin Osborne",
    status: "Alive",
    profession: "Youtuber",
    twitter: "@osbourne",
    picture: "bertin.jpg",
    alternativeText: "Osbourne pointing at you",
    selected: true,
  };

  return (
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${man1.picture}`}
          alt={man1.alternativeText}
        />
        <span className="gentleman__initial">{man1.name[0]}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{man1.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {man1.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> {man1.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>{" "}
            {man1.twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
};

export default Card;
