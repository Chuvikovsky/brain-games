import readlineSync from "readline-sync";

const getUserName = (question) => {
  const userName = readlineSync.question(`${question} `);
  return userName;
};

export { getUserName };
