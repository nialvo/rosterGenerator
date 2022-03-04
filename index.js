const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer.js')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')

const alec =new Engineer("a","b","c","dd");

console.log(alec.getRole());