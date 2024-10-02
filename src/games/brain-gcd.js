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
  let num1 = generateRandomNumber({ maxValue: 40 })
    * generateRandomNumber({ maxValue: 2 });
  let num2 = generateRandomNumber({ maxValue: 30 })
    * generateRandomNumber({ maxValue: 3 });
  const question = `${num1} ${num2}`;
  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  return [question, calculateGCD(num1, num2)];
};

export default () => {
  app({
    description: 'Find the greatest common divisor of given numbers.',
    generateQuestion: createQuestion,
  });
};
