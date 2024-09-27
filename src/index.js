import readlineSync from 'readline-sync';

let userName;

export const getUserAnswer = (question) => {
  const userAnswer = readlineSync.question(question);
  return userAnswer;
};

export const numberQuestions = 3;

export const generateRandomNumber = ({ maxValue = 100, shift = 1 } = {}) => {
  const result = Math.floor(Math.random() * maxValue + shift);
  return result;
};

export const showIntroduction = () => {
  console.log('Welcome to the Brain Games!');
  userName = getUserAnswer('May I have your name? ');
  console.log(`Hello, ${userName}`);
};

export const showCongratulation = () => {
  console.log(`Congratulations, ${userName}!`);
};

export const showWrongAnswerCalc = (userAnswer, answer) => {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`
  );
  console.log(`Let's try again, ${userName}!`);
};

export const isEven = (number) => number % 2 === 0;

export const generateEquation = () => {
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
  return [`${num1} ${symbol} ${num2}`, result.toString()];
};
