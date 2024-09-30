import { generateRandomNumber, app } from '../index.js';

const createQuestion = () => {
  const numberOfSteps = 10;
  const difference = generateRandomNumber({ maxValue: 10 });
  const missingStep = generateRandomNumber({
    maxValue: numberOfSteps - 1,
    shift: 0,
  });
  const initialValue = generateRandomNumber({ maxValue: 60 });
  let question = '';
  let answer = 0;

  for (let i = 0; i < numberOfSteps; i += 1) {
    if (i === missingStep) {
      answer = initialValue + i * difference;
      question = `${question} ..`;
    } else {
      question = `${question} ${initialValue + i * difference}`;
    }
  }
  return [question, answer];
};

export default () => {
  app({
    description: 'What number is missing in the progression?',
    generateQuestion: createQuestion,
  });
};
