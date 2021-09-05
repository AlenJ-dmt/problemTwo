import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [str, setStr] = useState("");
  const [result, setResult] = useState("");
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const fintNumberOfOcurrences = (mainString) => {
    if (mainString === "") {
      setErr(true);
      setErrMsg(<p className="err"> string cannot be empty. </p>);
      return;
    }
    if (mainString.length < 5) {
      setErr(true);

      setErrMsg(<p className="err"> string must be at least 5 char long. </p>);
      return;
    }

    let occurrences = {};
    let moreThanOneOccurrence = {};

    for (let i = 0; i < mainString.length; i++) {
      if (i <= mainString.length - 4) {
        let newSubstr = mainString.slice(i, i + 4);

        if ([newSubstr] in occurrences) {
          moreThanOneOccurrence[newSubstr] = occurrences[newSubstr] + 1;
          occurrences[newSubstr] = occurrences[newSubstr] + 1;
        } else {
          occurrences[newSubstr] = 1;
        }
      }
    }

    if (Object.keys(moreThanOneOccurrence).length < 1) {
      setErr(true);
      setErrMsg(<p className="err"> No substring apperas more than once. </p>);
    }
    setResult(moreThanOneOccurrence);


    return moreThanOneOccurrence;
  };

  return (
    <div className="App">
      <div className="app__holder">
        <h1 className="app__header">Occurrences in a string</h1>
        <div className="input__container">
          <label className="label__str" htmlFor="str">
            Please enter a string:
          </label>
          <input
            autoComplete="off"
            onChange={(ev) => {
              setErr(false);
              setResult("");
              setStr(ev.target.value);
            }}
            className="str__input"
            name="str"
          ></input>
        </div>
        {err && <div className="result__container">{errMsg}</div>}
        {result !== "" && (
          <div className="result__container">
            <p className="result__object">{JSON.stringify(result)}</p>
          </div>
        )}
      </div>
      <button onClick={() => fintNumberOfOcurrences(str)} className="btn">
        Analize
      </button>
    </div>
  );
};

export default App;
