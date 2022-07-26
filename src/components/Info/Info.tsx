import Button from "../Button/Button";
import "./Info.css";

const Info = (): JSX.Element => {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <Button text="Select all" css="button button--select" />
      </section>
    </>
  );
};

export default Info;
