import readlineSync from 'readline-sync';

const numberOfQuestions = 3;

export const generateRandomNumber = ({ maxValue = 100, shift = 1 } = {}) => {
  const result = Math.floor(Math.random() * maxValue + shift);
  return result;
};

export const app = (gameParameters) => {
  const { description, generateQuestion } = gameParameters;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(`${description}`);

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, answer] = generateQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.
Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
