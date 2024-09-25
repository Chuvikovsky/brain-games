import readlineSync from 'readline-sync';

const getUserAnswer = (question) => {
  const userName = readlineSync.question(question);
  return userName;
};

const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1);

const isEven = (number) => number % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserAnswer('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countCorrectAnswers = 0;

  while (true) {
    const number = generateRandomNumber();
    console.log(`Question: ${number} `);
    const userAnswer = getUserAnswer('Your answer: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      countCorrectAnswers += 1;
      console.log('Correct!');
      if (countCorrectAnswers === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      break;
    }
  }
};
