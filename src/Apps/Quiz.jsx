import "./Quiz.css";
import { QUIZ } from "../quiz";
import { useState } from "react";

function Quiz() {
  const [step, setStep] = useState(1);
  const [correct, setCorrect] = useState(0);
  const question = QUIZ.find((item) => item.id === step);

  const onClickVariant = (id) => {
    setStep(step + 1);
    (id === question.correct) ? setCorrect(correct + 1) : '';
  };

  const progress = (step / QUIZ.length) * 100;

  const resetQuiz = () => {
    setStep(1);
    setCorrect(0);
  }

  if (step > QUIZ.length) {
    return <Result onReset={resetQuiz} correct={correct}/>
  } else {
    return (
        <div className="card">
            <Card
                question={question}
                onClickVariant={onClickVariant}
                step={step}
                progress={progress}
            />
        </div>
    );
  }

  
}

function Card({ question, onClickVariant, progress }) {
  return (
    <div>
      <progress value={progress} max={100}> </progress>
      <h2>{question.title}</h2>
      <ul className="ulQuiz">
        {question.variants.map((text, index) => (
          <li className="liQuiz" key={text} onClick={() => onClickVariant(index)}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Result({onReset, correct}) {
  return (
    <div>
      <img
        className="quiz-gif"
        src="https://media.tenor.com/ZoZqWaSnN5UAAAAi/diwali-sparkles-stars.gif"
        alt="Congratulation"
      />
      <h2>Результат {correct} из {QUIZ.length}</h2>
      <button onClick={onReset} >Попробовать снова</button>
    </div>
  );
}

export default Quiz;
