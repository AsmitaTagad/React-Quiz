/* eslint-disable*/
import React, { useRef, useState } from "react";
import  "./Quiz.module.css";

function Quiz({ Question, Options, cAnswer, handleSubmit }) {
  let result = useRef(0);
  function handleRadioBtn(e) {
    //   console.log(e.target.value);
    let tempValue = e.target.value;
    if (Number(cAnswer) == tempValue) {
      result.current = result.current + 1;
      //  console.log(result)
    }

    handleSubmit(result.current);
  }

  return (
    <div>
      <h1>{Question}</h1>
      {Options.map((element, index) => {// eslint-disable-next-line 
        return (
          <div key={index}>
            <input
              type="radio"
              value={index + 1}
              onChange={handleRadioBtn}
              name="question"
            />
            <label>{element.option}</label>
          </div>
        );
      })}

      <p>{cAnswer}</p>
    </div>
  );
}

export default Quiz;