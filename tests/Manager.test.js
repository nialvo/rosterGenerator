const Manager = require("../lib/Manager.js");

describe("Manager", () => {

  describe("Initialization", () => {

    it("should return an object containing properties 'name', 'id', 'email', 'officeNumber' when called with the 'new' keyword", () => {
      const obj = new Manager();
      expect(Object.keys(obj)).toEqual(['name','id','email','officeNumber']);
    });

    it("should set values of keys 'name', 'id', 'email', 'officeNumber' to 'a', 'b', 'c', 'd' when instantiated with arguments 'a, 'b', 'c', 'd'", () => {
        const obj = new Manager('a','b','c','d');
        expect(Object.values(obj)).toEqual(['a','b','c', 'd']);
    });

  });

  describe("getRole", () => {

    it("getRole() should return 'Manager'", () => {
        const obj = new Manager();
        expect(obj.getRole()).toEqual('Manager');
    });
    
  });

});
