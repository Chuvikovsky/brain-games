import { app, generateRandomNumber } from '../index.js';

const createQuestion = () => {
  const mathSigns = ['+', '-', '*'];
  const symbol = mathSigns[generateRandomNumber({ maxValue: 3, shift: 0 })];
  let num1 = 0;
  let num2 = 0;
  let result = 0;
  switch (symbol) {
    case '+':
      num1 = generateRandomNumber();
      num2 = generateRandomNumber();
      result = num1 + num2;
      break;
    case '-':
      num1 = generateRandomNumber();
      num2 = generateRandomNumber({ maxValue: num1 });
      result = num1 - num2;
      break;
    case '*':
      num1 = generateRandomNumber({ maxValue: 50 });
      num2 = generateRandomNumber({ maxValue: 10 });
      result = num1 * num2;
      break;
    default:
      num1 = generateRandomNumber();
      num2 = generateRandomNumber();
      result = num1 + num2;
      break;
  }
  return [`${num1} ${symbol} ${num2}`, result];
};

export default () => {
  app({
    description: 'What is the result of the expression?',
    generateQuestion: createQuestion,
  });
};
