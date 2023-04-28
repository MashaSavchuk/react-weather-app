import "./App.css";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaulCity="London" />
        <footer>
          <p>
            This project is coded by{" "}
            <a
              href="https://cute-starburst-57982c.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Mariia Savchuk
            </a>{" "}
            and it is{" "}
            <a
              href="https://github.com/MashaSavchuk/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open-source on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
