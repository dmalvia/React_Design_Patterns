import useTimer from "../hooks/useTimer";

// eslint-disable-next-line react/prop-types
const Countdown = ({ initialSeconds }) => {
  const { seconds, start, stop, reset, isActive } = useTimer(
    initialSeconds,
    true
  );
  return (
    <div>
      <h2>Countdown</h2>
      <p className="digit">{seconds}s</p>
      <button onClick={start} disabled={isActive || seconds <= 0}>
        Start
      </button>
      <button onClick={stop} disabled={!isActive}>
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Countdown;
