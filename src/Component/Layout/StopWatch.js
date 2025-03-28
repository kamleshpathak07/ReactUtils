import { useEffect, useRef, useState } from "react";
export default function StopWatch() {
  let temp = 0;
  const refCounter = useRef(0);
  const refIntervalTimer = useRef(null);
  const [stopCounter, setStopCounter] = useState(30);
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    temp = temp + 1;
    refCounter.current = refCounter.current + 1;
    setCounter((prevstate) => prevstate + 1);
    console.log("Value of refCounter : ", refCounter.current);
    console.log("Value of temp Varriable : ", temp);
  };
  const startTimer = () => {
    refIntervalTimer.current = setInterval(() => {
      let tempCounter = stopCounter - 1;
      setStopCounter((prevstate) => {
        if (prevstate - 1 <= 0) {
          console.log("Stop Counter automated called");
          clearInterval(refIntervalTimer.current);
          refIntervalTimer.current = null;
        }
        return prevstate - 1;
      });
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(refIntervalTimer.current);
  };
  // useEffect(() => {
  //setCounter(refCounter.current);
  //console.log(refCounter.current);
  // }, [counter]);
  useEffect(() => {
    return () => {
      console.log("StopWatch Component Unmounted");
      clearInterval(refIntervalTimer.current);
    };
  }, []);
  return (
    <div className="stopwatch-sec-cls">
      <div className="ref-cls-comp">
        <p>Value of temp varriable : {temp}</p>
        <p>Button Clicked : {counter}</p>
        <p>Ref Component Button Clicked : {refCounter.current}</p>
        <button className="bs5-btn-primary" onClick={handleCounter}>
          Click Button
        </button>
      </div>
      <div className="stop-cls-sec">
        <p>
          Your CountDown Start : <span>{stopCounter}</span>
        </p>
        <button className="button btn-primary" onClick={startTimer}>
          Start CountDown
        </button>
        <button className="button btn-primary" onClick={stopTimer}>
          Stop CountDown
        </button>
      </div>
    </div>
  );
}
