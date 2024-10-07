import { generateRandomNumber, app } from '../index.js';

const numberOfSteps = 10;

const generateProgression = (initialValue, difference) => {
  const progression = [];
  for (let i = 0; i < numberOfSteps; i += 1) {
    progression.push(initialValue + i * difference);
  }
  return progression;
};

const createQuestion = () => {
  const difference = generateRandomNumber({ maxValue: 20 });
  const missingStep = generateRandomNumber({
    maxValue: numberOfSteps - 1,
    shift: 0,
  });
  const initialValue = generateRandomNumber({ maxValue: 60 });
  const progression = generateProgression(initialValue, difference);
  const missingValue = initialValue + missingStep * difference;
  progression[missingStep] = '..';

  return [progression.join(' '), missingValue];
};

export default () => {
  app({
    description: 'What number is missing in the progression?',
    generateQuestion: createQuestion,
  });
};
