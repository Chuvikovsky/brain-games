import readlineSync from 'readline-sync';

const generateRandomNumber = ({ maxValue = 100, shift = 1 } = {}) => {
  const result = Math.floor(Math.random() * maxValue + shift);
  return result;
};

const generateEquation = () => {
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
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let countCorrectAnswers = 0;
  const numberQuestions = 3;
  do {
    const [equation, result] = generateEquation();
    console.log(`Question: ${equation}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === result.toString()) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } while (countCorrectAnswers < numberQuestions);

  console.log(`Congratulations, ${userName}!`);
};
