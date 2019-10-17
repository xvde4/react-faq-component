import React from "react";
import ReactDOM from "react-dom";
import FAQ from "./FAQ";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <FAQ>
        <FAQ.QAItem>
          <FAQ.Question answerId="q1">
            {(isOpen, onToggle) => {
              return (
                <>
                  {isOpen ? "Open " : "Close "}
                  <span>What is your question?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q1"> Knock Knock! </FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q2">
            {(isOpen, onToggle) => {
              return (
                <>
                  {isOpen ? "Open " : "Close "}
                  <span>Why do you ask such stupid questions?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q2"> 42 is the answer. </FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q3">
            {(isOpen, onToggle) => {
              return (
                <>
                  {isOpen ? "Open " : "Close "}
                  <span>Any other questions?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q3"> Seek and you shall find. </FAQ.Answer>
        </FAQ.QAItem>
      </FAQ>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
