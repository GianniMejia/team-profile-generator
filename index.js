import inquirer from "inquirer";
import fs from "fs";
import Manager from "./lib/manager.js";
import Engineer from "./lib/engineer.js";
import Intern from "./lib/intern.js";
import generateRosterHtml from "./src/roster-template.js";

try {
  const roster = [];

  roster.push(await getManager());

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
          roster.push(await getEngineer());
        }
        break;
      case "Enter an Intern":
        {
          // Prompt for intern
          roster.push(await getIntern());
        }
        break;
      case "Finish":
        // Generate the HTML file
        console.log("roster: ", roster);
        fs.writeFileSync("dist/roster.html", generateRosterHtml(roster));
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

async function getManager() {
  return new Manager(
    await inquirer.prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: "name",
        message: "What is your team manager's name?",
      },
      {
        type: "input",
        name: "id",
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
    ])
  );
}

async function getEngineer() {
  return new Engineer(
    await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub username?",
      },
    ])
  );
}

async function getIntern() {
  return new Intern(
    await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Intern's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the Intern's school name?",
      },
    ])
  );
}
