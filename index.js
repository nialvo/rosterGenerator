const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer.js')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')


let path;//name of the created file

const promptInit = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'team',
            message: 'Enter the name of the team.',
          },

    ])
}

const rosterInit = ({team}) => {

    path = `./dist/${team}.html`;


    const roster0 = 
            `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${team} Roster</title>
      <link rel="stylesheet" href="./style.css" />
    </head>`

    const style = 
    `body {
        display: flex;
        flex-direction: column;
        line-height: 1.3;
    }
      
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1%;
        background-color: #13293d;
        color: #fff;
    }
      
    h1 {
        font-size: 200%;
    }
      
    h2 {
        margin: 2% 0;
        font-size: 250%;
    }`



    fs.writeFile(path,roster0,(err)=>{});
    fs.writeFile(`./dist/style.css`,style,(err)=>{});




}

rosterInit({team: "yello"});
//prompt user for manager and option to add engineer/intern
//add manager card to html
//while engineer/intern prompt user for engineer/intern and option to add engineer/intern
    //add engineer/intern


//generate HTML 
//prompt user for manager and option to add engineer/intern
//add manager card to html
//while engineer/intern prompt user for engineer/intern and option to add engineer/intern
    //add engineer/intern



/*GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated*/