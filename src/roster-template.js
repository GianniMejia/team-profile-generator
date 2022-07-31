export default function generateRosterHtml(roster) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Roster</title>
        <style>
          * {
            box-sizing: border-box;
          }
    
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: Arial, sans-serif;
            height: 100%;
          }
    
          body {
            display: flex;
            flex-direction: column;
            font-size: 0.8em;
          }
    
          body > header {
            display: flex;
            justify-content: center;
            background: #e74856;
            color: white;
            font-size: 2em;
            padding: 1.5em;
          }
    
          body > main {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin: auto;
            max-width: 950px;
          }
    
          .card {
            display: inline-flex;
            flex-direction: column;
            box-shadow: 5px 5px 5px grey;
            margin: 1em;
          }
    
          .card > header {
            display: flex;
            flex-direction: column;
            font-size: 1.6em;
            background: #0177f7;
            color: white;
            padding: 0.4em;
          }
    
          .card header small {
            font-size: 0.8em;
          }
    
          .card main {
            background: #f6f7f9;
            padding: 3em 1.3em;
          }
    
          .card main div {
            background: white;
            border: 1px solid rgb(221, 220, 220);
            padding: 1em;
          }
    
          .card main div:not(:last-child) {
            border-bottom: 0;
          }
        </style>
      </head>
      <body>
        <header>My Team</header>
        <main>
          ${roster
            .filter((employee) => employee.getRole() == "Manager")
            .map(
              (manager) => `
                <div class="card">
                  <header>
                    ${manager.getName()}
                    <small>${manager.getRole()}</small>
                  </header>
                  <main>
                    <div>ID: ${manager.getId()}</div>
                    <div>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></div>
                    <div>Office Number: ${manager.officeNumber}</div>
                  </main>
                </div>
              `
            )
            .join("")}
          ${roster
            .filter((employee) => employee.getRole() == "Engineer")
            .map(
              (engineer) => `
                <div class="card">
                  <header>
                    ${engineer.getName()}
                    <small>${engineer.getRole()}</small>
                  </header>
                  <main>
                    <div>ID: ${engineer.getId()}</div>
                    <div>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
                    <div>GitHub: <a target="_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></div>
                  </main>
                </div>
              `
            )
            .join("")}
          ${roster
            .filter((employee) => employee.getRole() == "Intern")
            .map(
              (intern) => `
                <div class="card">
                  <header>
                    ${intern.getName()}
                    <small>${intern.getRole()}</small>
                  </header>
                  <main>
                    <div>ID: ${intern.getId()}</div>
                    <div>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></div>
                    <div>School: ${intern.getSchool()}</div>
                  </main>
                </div>
              `
            )
            .join("")}
        </main>
      </body>
    </html>
  `;
}
