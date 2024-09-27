import {
  showIntroduction,
  showCongratulation,
  generateRandomNumber,
  getUserAnswer,
  numberQuestions,
  isEven,
} from './index.js';

export default () => {
  showIntroduction();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countCorrectAnswers = 0;
  do {
    const number = generateRandomNumber();
    const answer = isEven(number) ? 'yes' : 'no';
    console.log(`Questions: ${number}`);
    const userAnswer = getUserAnswer('Your answer: ');
    if (userAnswer === answer) {
      countCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      return;
    }
  } while (countCorrectAnswers < numberQuestions);
  showCongratulation();
};
