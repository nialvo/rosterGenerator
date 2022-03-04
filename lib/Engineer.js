require('Employee.js');

class Engineer extends Employee{

    constr(name, id, email, github){
        super(name, id, email);
        this.github = github;

    }

    getGithub(){return this.github}
    
    getRole(){return 'Engineer'}

}