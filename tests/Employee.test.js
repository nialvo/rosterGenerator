

const Employee = require("../lib/Employee.js");

describe("Employee", () => {

  describe("Initialization", () => {

    it("should return an object containing properties 'name', 'id', 'email' when called with the 'new' keyword", () => {
      const obj = new Employee();
      expect(Object.keys(obj)).toEqual(['name','id','email']);
    });

    it("should set values of keys 'name', 'id', 'email' to 'a', 'b', 'c' when instantiated with arguments 'a, 'b', 'c'", () => {
        const obj = new Employee('a','b','c');
        expect(Object.values(obj)).toEqual(['a','b','c']);
    });

  });

  describe("getRole", () => {

    it("getRole() should return 'Employee'", () => {
        const obj = new Employee();
        expect(obj.getRole()).toEqual('Employee');
    });

  });

});
