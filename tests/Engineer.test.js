const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {

  describe("Initialization", () => {

    it("should return an object containing properties 'name', 'id', 'email', 'github' when called with the 'new' keyword", () => {
      const obj = new Engineer();
      expect(Object.keys(obj)).toEqual(['name','id','email','github']);
    });

    it("should set values of keys 'name', 'id', 'email', 'github to 'a', 'b', 'c', 'd' when instantiated with arguments 'a, 'b', 'c', 'd'", () => {
        const obj = new Engineer('a','b','c','d');
        expect(Object.values(obj)).toEqual(['a','b','c', 'd']);
    });

  });

  describe("getRole", () => {

    it("getRole() should return 'Engineer'", () => {
        const obj = new Engineer();
        expect(obj.getRole()).toEqual('Engineer');
    });
    
  });

  describe("getGithub", () => {

    it("getGithub() should return 'hackerman' when obj was instantiated with arguments 'a, 'b', 'c', 'hackerman'", () => {
        const obj = new Engineer('a','b','c','hackerman');
        expect(obj.getGithub()).toEqual('hackerman');
    });

    it("getGithub() should return 'zerocool' when obj was instantiated with any arguments and value of school was set to 'zerocool'", () => {
        const obj = new Engineer('a','b','c','d');
        obj.github='zerocool';
        expect(obj.getGithub()).toEqual('zerocool');
    });

  });

});
