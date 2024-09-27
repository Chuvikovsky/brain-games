import {
  showIntroduction,
  showCongratulation,
  getUserAnswer,
  numberQuestions,
  showWrongAnswerCalc,
  generateEquation,
} from './index.js';

export default () => {
  showIntroduction();
  console.log('What is the result of the expression?');
  let countCorrectAnswers = 0;
  do {
    const [equation, answer] = generateEquation();
    console.log(`Question: ${equation}`);
    const userAnswer = getUserAnswer('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      showWrongAnswerCalc(userAnswer, answer);
      return;
    }
  } while (countCorrectAnswers < numberQuestions);

  showCongratulation();
};
