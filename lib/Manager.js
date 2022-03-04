require('Employee.js');

class Engineer extends Employee{

    constr(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber=officeNumber;

    }
    
    getRole(){return 'Manager'}

}