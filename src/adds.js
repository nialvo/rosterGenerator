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
        if (addMore[0]=='Engineer')Adds.prototype.Engineer(p);
        else if (addMore[0]=='Intern')Adds.prototype.Intern(p);
        else if (addMore[0]=='Finish')appends.Finish(p);
    })
}

Adds.prototype.Engineer = (p) => {
    prompts.Engineer().then(({name,id,email,github,addMore})=>{
        let m = new Engineer(name, id, email, github);
        appends.Engineer(m,p);
        if (addMore[0]=='Engineer')Adds.prototype.Engineer(p);
        else if (addMore[0]=='Intern')Adds.prototype.Intern(p);
        else if (addMore[0]=='Finish')appends.Finish(p);
    })
}

Adds.prototype.Intern = (p) => {
    prompts.Intern().then(({name,id,email,school,addMore})=>{
        let m = new Intern(name, id, email, school);
        appends.Intern(m,p);
        if (addMore[0]=='Engineer')Adds.prototype.Engineer(p);
        else if (addMore[0]=='Intern')Adds.prototype.Intern(p);
        else if (addMore[0]=='Finish')appends.Finish(p);
    })
}



module.exports = Adds;