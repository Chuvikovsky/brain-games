import { app, generateRandomNumber } from '../index.js';

const calculateResult = (num1, num2, operand) => {
  let result = 0;
  switch (operand) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = num1 + num2;
      break;
  }
  return result;
};

const createQuestion = () => {
  const operands = ['+', '-', '*'];
  const operand = operands[generateRandomNumber({ maxValue: 3, shift: 0 })];
  let num1 = 0;
  let num2 = 0;
  switch (operand) {
    case '+':
      num1 = generateRandomNumber();
      num2 = generateRandomNumber();
      break;
    case '-':
      num1 = generateRandomNumber();
      num2 = generateRandomNumber({ maxValue: num1 });
      break;
    case '*':
      num1 = generateRandomNumber({ maxValue: 50 });
      num2 = generateRandomNumber({ maxValue: 10 });
      break;
    default:
      num1 = generateRandomNumber();
      num2 = generateRandomNumber();
      break;
  }
  return [`${num1} ${operand} ${num2}`, calculateResult(num1, num2, operand)];
};

export default () => {
  app({
    description: 'What is the result of the expression?',
    generateQuestion: createQuestion,
  });
};
