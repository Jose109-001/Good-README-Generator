//array of questions for user
module.exports = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a descriptions of your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "What are the installation instruction for this project. Write NONE if no instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "How would you like your application to be sued?",
    name: "sued",
  },
  {
    type: "input",
    message: "Who contributed on this project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "What are the test Instructions?",
    name: "test",
  },
  {
    type: "checkbox",
    message: "PLease select a Licesne.",
    choices: ["Apache", "MIT", "ISC", "GNU GPLv3"],
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub Username",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address",
    name: "email",
  },
];
