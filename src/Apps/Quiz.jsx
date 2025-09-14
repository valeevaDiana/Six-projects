import "./Quiz.css";
import { QUIZ } from "../quiz";
import { useState } from "react";

function Quiz() {
  const [step, setStep] = useState(1);
  const question = QUIZ.find((item) => item.id === step);
  const onClickVariant = (id) => {
    setStep(step + 1);
  };
  const progress = (step / QUIZ.length) * 100;

  const resetQuiz = () => {
    setStep(1);
  }

  if (step > QUIZ.length) {
    return <Result onReset={resetQuiz}/>
  }

  return (
    <div>
      <Card
        question={question}
        onClickVariant={onClickVariant}
        step={step}
        progress={progress}
      />
    </div>
  );
}

function Card({ question, onClickVariant, progress }) {
  return (
    <div>
      <progress className="progressBar" value={progress} max={100}> </progress>
      <h2>{question.title}</h2>
      <ul>
        {question.variants.map((text, id) => (
          <li key={text} onClick={() => onClickVariant(id)}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Result({onReset}) {
  return (
    <div>
      <img
        className="quiz-gif"
        src="https://media.tenor.com/ZoZqWaSnN5UAAAAi/diwali-sparkles-stars.gif"
        alt="Congratulation"
      />
      <h2>результат 1 из 2</h2>
      <button onClick={onReset} >Попробовать снова</button>
    </div>
  );
}

export default Quiz;
