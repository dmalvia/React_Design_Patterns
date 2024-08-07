import "./App.css";
import Countdown from "./components/Countdown";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <>
      <h2>Custom Hook Design Pattern</h2>
      <Stopwatch />
      <Countdown initialSeconds={60} />
    </>
  );
}

export default App;
