import { app, generateRandomNumber } from '../index.js';

const createQuestion = () => {
  let num1 = generateRandomNumber({ maxValue: 40 })
    * generateRandomNumber({ maxValue: 2 });
  let num2 = generateRandomNumber({ maxValue: 30 })
    * generateRandomNumber({ maxValue: 3 });
  const question = `${num1} ${num2}`;
  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  return [question, num1];
};

export default () => {
  app({
    description: 'Find the greatest common divisor of given numbers.',
    generateQuestion: createQuestion,
  });
};
