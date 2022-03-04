require('Employee.js');

class Engineer extends Employee{

    constr(name, id, email, school){
        super(name, id, email);
        this.school = school;

    }

    getSchool(){return this.school}
    
    getRole(){return 'Intern'}

}