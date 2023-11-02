import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App ">
      <div className="names d-flex justify-content-around">
        <a href="/">johannesburg</a>
        <a href="/">Pretoria</a>
        <a href="/">Thohoyandou</a>
        <a href="/">Polokwane</a>
      </div>
      <Weather />
    </div>
  );
}

export default App;
