import readlineSync from 'readline-sync';

const numberOfQuestions = 3;

export const generateRandomNumber = ({ maxValue = 100, shift = 1 } = {}) => {
  const result = Math.floor(Math.random() * maxValue + shift);
  return result;
};

export const app = (gameParameters) => {
  const { description, generateQuestion } = gameParameters;
  let countCorrectAnswers = 0;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(`${description}`);

  do {
    const [question, answer] = generateQuestion();
    console.log(`Questions: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(answer)) {
      countCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.
  Let's try again, ${userName}!`);
      return;
    }
  } while (countCorrectAnswers < numberOfQuestions);

  console.log(`Congratulations, ${userName}!`);
};
