import Man from "../../types/interface";
import Card from "../Card/Card";
import "./App.css";

const App = () => {
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

  const man2: Man = {
    id: 2,
    name: "The Farytale",
    status: "RIP",
    profession: "Influencer",
    twitter: "pending",
    picture: "fary.jpg",
    alternativeText: "The Fary pointing at you",
    selected: false,
  };

  const man3: Man = {
    id: 3,
    name: "Julius Churchs",
    status: "Alive",
    profession: "Java developer",
    twitter: "@julius_churchs",
    picture: "julio.jpg",
    alternativeText: "Churchs pointing at you",
    selected: true,
  };

  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">0 gentlemen pointing at you</p>
        <button className="button button--select">Select all</button>
      </section>
      <main className="main">
        <ul className="gentlemen">
          <Card
            name={man1.name}
            status={man1.status}
            profession={man1.profession}
            twitter={man1.twitter}
            picture={man1.picture}
            alternativeText={man1.alternativeText}
          />
          <Card
            name={man2.name}
            status={man2.status}
            profession={man2.profession}
            twitter={man2.twitter}
            picture={man2.picture}
            alternativeText={man2.alternativeText}
          />
          <Card
            name={man3.name}
            status={man3.status}
            profession={man3.profession}
            twitter={man3.twitter}
            picture={man3.picture}
            alternativeText={man3.alternativeText}
          />
        </ul>
      </main>
    </div>
  );
};

export default App;
