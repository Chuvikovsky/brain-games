import { app, generateRandomNumber } from '../index.js';

const calculateResult = (num1, num2, operand) => {
  switch (operand) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Неизвестный оператор: '${operand}'!`);
  }
};

const createQuestion = () => {
  const operands = ['+', '-', '*'];
  const operand = operands[generateRandomNumber({ maxValue: 3, shift: 0 })];
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber({ maxValue: num1 });
  return [`${num1} ${operand} ${num2}`, calculateResult(num1, num2, operand)];
};

export default () => {
  app({
    description: 'What is the result of the expression?',
    generateQuestion: createQuestion,
  });
};
