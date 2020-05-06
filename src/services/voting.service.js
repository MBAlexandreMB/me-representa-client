import axios from 'axios';
import process from '../environment/env';

const http = axios.create({
  baseURL: process.env.BASE_URL
});

const getRandomQuestion = (answeredQuestions) => {
  return new Promise((resolve, reject) => {
    http.post('/questions', { questions: answeredQuestions })
      .then(result => {
       resolve(result.data[0]);
      });
  });
}

const getMatches = (answersList) => {
  return new Promise((resolve, reject) => {
    http.post('/voting', { answers: { votes: answersList } })
      .then(result => {
        resolve(result.data);
      });
  });
}

export default { getRandomQuestion, getMatches };