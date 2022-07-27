import inquirer from "inquirer";

try {
  const roster = {
    manager: null,
    engineers: [],
    interns: [],
  };

  roster.manager = await getManagerInfo();

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
        {
          // Prompt for engineer
          roster.engineers = [...roster.engineers, await getEngineer()];
        }
        break;
      case "Enter an Intern":
        {
          // Prompt for intern
          roster.interns = [...roster.interns, await getIntern()];
        }
        break;
      case "Finish":
        // Generate the HTML file
        console.log("roster: ", roster);
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

async function getManagerInfo() {
  return await inquirer.prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "name",
      message: "What is your team manager's name?",
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is your team manager's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your team manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your team manager's office number?",
    },
  ]);
}

async function getEngineer() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Engineer's name?",
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is the Engineer's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the Engineer's email address?",
    },
    {
      type: "input",
      name: "githubUsername",
      message: "What is the Engineer's GitHub username?",
    },
  ]);
}

async function getIntern() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Intern's name?",
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is the Intern's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the Intern's email address?",
    },
    {
      type: "input",
      name: "schoolName",
      message: "What is the Intern's school name?",
    },
  ]);
}
