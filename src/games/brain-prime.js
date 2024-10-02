import { app, generateRandomNumber } from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i <= Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const createQuestion = () => {
  const number = generateRandomNumber();
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  app({
    description:
      'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateQuestion: createQuestion,
  });
};
