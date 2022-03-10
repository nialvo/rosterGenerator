const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer.js')
const Manager = require('../lib/Manager.js')
const Intern = require('../lib/Intern.js')
const Appends = require('./appends.js')
const appends = new Appends();
const Prompts = require('./prompts.js')
const prompts = new Prompts();

function Adds() {};

Adds.prototype.Manager = (p) => {

    prompts.Manager().then(({name,id,email,office,addMore})=>{
        let m = new Manager(name, id, email, office);
        appends.Manager(m,p);
        console.log(addMore);
        console.log(m);
        console.log(p.a);

    })

}



module.exports = Adds;