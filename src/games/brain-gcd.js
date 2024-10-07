import { app, generateRandomNumber } from '../index.js';

const calculateGCD = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
};

const createQuestion = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const question = `${num1} ${num2}`;
  return [question, calculateGCD(num1, num2)];
};

export default () => {
  app({
    description: 'Find the greatest common divisor of given numbers.',
    generateQuestion: createQuestion,
  });
};
