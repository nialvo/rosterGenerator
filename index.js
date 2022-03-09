const fs = require('fs');
const inquirer = require('inquirer');


const Engineer = require('./lib/Engineer.js')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')

const Prompts = require('./src/prompts.js')
const prompts = new Prompts();
let path;//name of the created file


const rosterInit = ({team}) => {

    path = `./dist/${team}.html`;


    const roster = 
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

    .tab {
        height:100px;
        width: 250px;
        padding: 1%;
        background-color: white;
        color: blue;
        border: 1px solid blue;
        border-radius:2px;

    }
      
    .card {
        display: flex;
        height:500px;
        width: 300px;
        align-items: center;
        padding: 1%;
        background-color: #13293d;
        color: #fff;
        border: 5px solid black;
        border-radius:5px;
    }`

    fs.writeFile(path,roster,(err)=>{});
    fs.writeFile(`./dist/style.css`,style,(err)=>{});
}

const appendManager = (M) => {

    const appendage = 
    `<div class="card">
        <h2>Manager<//h2>
        <h3>${M.name}</h3>
        <div class="tab">
            ID: ${M.id}
        </div>
        <div class="tab">
            Email: ${M.email}
        </div>
        <div class="tab">
            Office Number: ${M.officeNumber}
        </div>



    </div>`

    
    fs.appendFile(path,appendage,(err)=>{});
    
}


//prompt user for manDat and option to add engineer/intern

const addManager = () => {

    prompts.Manager().then(({name,id,email,office,addMore})=>{
        let m = new Manager(name, id, email, office);
        appendManager(m);
        console.log(addMore);

    })

}

prompts.Init().then((answers)=>{rosterInit(answers)}).then(()=>{addManager()})




















//add manDat card to html
//while engineer/intern prompt user for engineer/intern and option to add engineer/intern
    //add engineer/intern


//generate HTML 
//prompt user for manDat and option to add engineer/intern
//add manDat card to html
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
THEN I am prompted to enter the team manDat’s name, employee ID, email address, and office number
WHEN I enter the team manDat’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated*/