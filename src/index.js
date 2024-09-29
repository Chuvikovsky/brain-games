import readlineSync from 'readline-sync';

const numberOfQuestions = 3;

export const generateRandomNumber = ({ maxValue = 100, shift = 1 } = {}) => {
  const result = Math.floor(Math.random() * maxValue + shift);
  return result;
};

export const app = (gameParameters) => {
  const { description, generateQuestion, incorrectAnswer, congratulation } =
    gameParameters;
  let countCorrectAnswers = 0;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(`${description}`);

  do {
    const [question, answer] = generateQuestion();
    console.log(`Questions: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      countCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      if (incorrectAnswer.length > 0) {
        console.log(
          `${incorrectAnswer
            .replace('<USER_ANSWER>', userAnswer)
            .replace('<ANSWER>', answer)
            .replace('<NAME>', userName)}`
        );
      }
      return;
    }
  } while (countCorrectAnswers < numberOfQuestions);
  console.log(`${congratulation.replace('<NAME>', userName)}`);
};
