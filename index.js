import inquirer from "inquirer";

try {
  const answers = await inquirer.prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "Manager Name",
      message: "What is your team manager's name?",
    },
    {
      type: "input",
      name: "Manager Employee ID",
      message: "What is your team manager's employee ID?",
    },
    {
      type: "input",
      name: "Manager Email",
      message: "What is your team manager's email address?",
    },
    {
      type: "input",
      name: "Manager Office Number",
      message: "What is your team manager's office number?",
    },
  ]);

  let menuAnswers;
  do {
    menuAnswers = await inquirer.prompt([
      {
        type: "list",
        name: "Menu",
        message: "What do you want to do next?",
        choices: ["Enter an Engineer", "Enter an Intern", "Finish"],
      },
    ]);

    switch (menuAnswers["Menu"]) {
      case "Enter an Engineer":
        // Prompt for engineer
        const answers = await inquirer.prompt([
          {
            type: "input",
            name: "Engineer Name",
            message: "What is the Engineer's name?",
          },
          {
            type: "input",
            name: "Engineer Employee ID",
            message: "What is the Engineer's employee ID?",
          },
          {
            type: "input",
            name: "Engineer Email",
            message: "What is the Engineer's email address?",
          },
          {
            type: "input",
            name: "Engineer Office Number",
            message: "What is the Engineer's office number?",
          },
          {
            type: "input",
            name: "Engineer GitHub",
            message: "What is the Engineer's GitHub username?",
          },
        ]);
        break;
      case "Enter an Intern":
        // Prompt for intern
        break;
      case "Finish":
        // Generate the HTML file
        break;
    }
  } while (menuAnswers["Menu"] != "Finish");
} catch (error) {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
}
