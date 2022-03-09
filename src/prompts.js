const inquirer = require('inquirer');
function Prompts() {};
const yesnomaybe = ["Engineer", "Intern", "Finish"];

Prompts.prototype.Manager = () => {
    return inquirer.prompt([{

            type: 'input',
            name: 'name',
            message: 'Enter employee name.',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID number.',
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                  return true;
                }
                return 'Please enter a positive number greater than zero.';
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email.',
            validate: (answer) => {
                const pass = answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                if (pass) {
                  return true;
                }
                return 'Please enter a valid email address.';
            },
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter employee office number.',
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                  return true;
                }
                return 'Please enter a positive number greater than zero.';
            },
        },
        {
            type: "checkbox",
            name: "addMore",
            message: "Would you like to add an engineer or an intern to your team?",
            choices: yesnomaybe,
        }
    ]);
};

Prompts.prototype.Engineer = () => {
    return inquirer.prompt([{

            type: 'input',
            name: 'name',
            message: 'Enter employee name.',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID number.',
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                  return true;
                }
                return 'Please enter a positive number greater than zero.';
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email.',
            validate: (answer) => {
                const pass = answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                if (pass) {
                  return true;
                }
                return 'Please enter a valid email address.';
            },
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter github username.',
        },
        {
            type: "checkbox",
            name: "addMore",
            message: "Would you like to add an engineer or an intern to your team?",
            choices: yesnomaybe,
        }
    ]);
};

Prompts.prototype.Intern = () => {
    return inquirer.prompt([{

            type: 'input',
            name: 'name',
            message: 'Enter employee name.',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID number.',
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                  return true;
                }
                return 'Please enter a positive number greater than zero.';
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email.',
            validate: (answer) => {
                const pass = answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                if (pass) {
                  return true;
                }
                return 'Please enter a valid email address.';
            },
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter school name.',
        },
        {
            type: "checkbox",
            name: "addMore",
            message: "Would you like to add an engineer or an intern to your team?",
            choices: yesnomaybe,
        }
    ]);
};

Prompts.prototype.Init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'team',
            message: 'Enter the name of the team.',
          },
    ])
}




module.exports = Prompts;
