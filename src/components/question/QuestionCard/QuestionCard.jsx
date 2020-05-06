import React from "react";
import './questionCard.scss'; 

const QuestionCard = ({ data, onSkip, onOptionChosen }) => {
  return (
    <>
    {
      data ?
      <div className="questioncard-container">
        <p>{data.question}</p>
        <a className="proposition-link" href={data.link}>
          Link para a proposta
        </a>
        <div className="buttons-container">
          <button onClick={() => onOptionChosen('Sim')}>Sim</button>
          <button onClick={() => onOptionChosen('Não')}>Não</button>
          <button onClick={() => onOptionChosen('Abstenção')}>Abstenção</button>
          <button onClick={() => onOptionChosen('Obstrução')}>Obstrução</button>
        </div>
        <p onClick={onSkip} className="skip-btn">Pular</p>
      </div>
      :
      <div className="questioncard-container">
        <h3>Nada para ser respondido!</h3>
      </div>
    }
    </>
  );
};

export default QuestionCard;
