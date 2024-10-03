import { generateRandomNumber, app } from '../index.js';

const numberOfSteps = 10;

const generateProgression = (initialValue, difference, missingStep) => {
  let question = '';

  for (let i = 0; i < numberOfSteps; i += 1) {
    if (i === missingStep) {
      question = `${question} ..`;
    } else {
      question = `${question} ${initialValue + i * difference}`;
    }
  }
  return question.trim();
};

const createQuestion = () => {
  const difference = generateRandomNumber({ maxValue: 10 });
  const missingStep = generateRandomNumber({
    maxValue: numberOfSteps - 1,
    shift: 0,
  });
  const initialValue = generateRandomNumber({ maxValue: 60 });

  return [generateProgression(initialValue, difference, missingStep), `${initialValue + missingStep * difference}`];
};

export default () => {
  app({
    description: 'What number is missing in the progression?',
    generateQuestion: createQuestion,
  });
};
