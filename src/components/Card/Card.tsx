import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
interface ManProp {
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
}

const Card = ({
  name,
  status,
  profession,
  twitter,
  picture,
  alternativeText,
}: ManProp): JSX.Element => {
  return (
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${picture}`}
          alt={alternativeText}
        />
        <span className="gentleman__initial">
          {name.includes("The") ? name[4].toUpperCase() : name[0].toUpperCase()}
        </span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> {twitter}
          </li>
        </ul>
      </div>
      <FontAwesomeIcon
        className="icon gentleman__icon gentleman__icon--delete"
        icon={faTimes}
      />

      <FontAwesomeIcon className="icon gentleman__icon fas " icon={faCheck} />
    </li>
  );
};

export default Card;
