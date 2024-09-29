import { generateRandomNumber, app } from './index.js';

const isEven = (number) => number % 2 === 0;

const createQuestion = () => {
  const number = generateRandomNumber();
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  app({
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    generateQuestion: createQuestion,
    incorrectAnswer: '',
    congratulation: 'Congratulations, <NAME>!',
  });
};
