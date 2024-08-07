import useTimer from "../hooks/useTimer";

const Stopwatch = () => {
  const { seconds, isActive, start, stop, reset } = useTimer();
  return (
    <div>
      <h2>Stopwatch</h2>
      <p className="digit">{seconds}s</p>
      <button onClick={start} disabled={isActive}>
        Start
      </button>
      <button onClick={stop} disabled={!isActive}>
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
