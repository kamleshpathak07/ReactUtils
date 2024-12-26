import { useState } from "react";
export default function TextUtil() {
  const [inputtext, setInputtext] = useState("");
  const handleInput = (event) => {
    console.log(event.target.value);
    setInputtext(event.target.value);
  };
  const handleUpperCase = () => {
    let input = inputtext;
    setInputtext(input.toUpperCase());
  };
  return (
    <div className="text-util-cls">
      <input className="from-control" value={inputtext} onInput={handleInput} />
      <button className="btn btn-primary" onClick={handleUpperCase}>
        UpperCase
      </button>
      <p>
        Preview : <span>{inputtext}</span>
      </p>
    </div>
  );
}
