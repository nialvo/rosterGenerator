const Intern = require("../lib/Intern.js");

describe("Intern", () => {

  describe("Initialization", () => {

    it("should return an object containing properties 'name', 'id', 'email', 'school' when called with the 'new' keyword", () => {
      const obj = new Intern();
      expect(Object.keys(obj)).toEqual(['name','id','email','school']);
    });

    it("should set values of keys 'name', 'id', 'email', 'school' to 'a', 'b', 'c', 'd' when instantiated with arguments 'a, 'b', 'c', 'd'", () => {
        const obj = new Intern('a','b','c','d');
        expect(Object.values(obj)).toEqual(['a','b','c', 'd']);
    });

  });

  describe("getRole", () => {

    it("getRole() should return 'Intern'", () => {
        const obj = new Intern();
        expect(obj.getRole()).toEqual('Intern');
    });
    
  });

  describe("getSchool", () => {

    it("getSchool() should return 'UCI' when obj was instantiated with arguments 'a, 'b', 'c', 'UCI'", () => {
        const obj = new Intern('a','b','c','UCI');
        expect(obj.getSchool()).toEqual('UCI');
    });

    it("getSchool() should return 'Hogwarts' when obj was instantiated with any arguments and value of school was set to 'Hogwarts'", () => {
        const obj = new Intern('a','b','c','d');
        obj.school='Hogwarts';
        expect(obj.getSchool()).toEqual('Hogwarts');
    });
    
  });

});