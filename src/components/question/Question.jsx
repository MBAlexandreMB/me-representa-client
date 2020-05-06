import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard/QuestionCard';
import votingService from '../../services/voting.service';

const Question = ({ ...restProps }) => {
  const [data, setData] = useState();
  const [answered, setAnswered] = useState({});
  
  useEffect(() => {
    handleCardChange(Object.keys(answered));
  }, [answered]);

  const handleCardChange = (answeredQuestions) => {
    votingService.getRandomQuestion(answeredQuestions)
    .then((question) => {
      if (question) {
        setData({
          linkedVoting: question.votacaoVinculada,
          question: question.descricao, 
          link: ''
        })
      } else {
        setData(undefined);
      }
    });
  };

  const handleAnswer = (answer) => {
    const obj = { 
      ...answered,
      [data.linkedVoting]: answer,
    };

    votingService.getMatches(obj)
    .then(congressmen => {
      console.log('----------------');
      congressmen.forEach(element => {
        console.log(element.match);
      });
      console.log('Total:', congressmen.length);
      console.log('----------------');
    });

    setAnswered(obj);
  };

  return (
    <QuestionCard
      onSkip={handleCardChange}
      onOptionChosen={handleAnswer}
      data={data}
      {...restProps}
    />
  );
};

export default Question;