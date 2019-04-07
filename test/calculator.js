"use strict";

const assert = require("assert");
const Calculator = require("../lib/calculator");

// Describes our test suite for Caculator
describe("Calculator", function() {
  let calc;

  beforeEach("Init Calculator", function() {
    calc = new Calculator();
  });

  // Tests for add method
  describe("#add()", function() {
    const tests = [
      { args: [2, 5], expected: 7 },
      { args: [1000, 5000], expected: 6000 },
      { args: [-100, -700], expected: -800 }
    ];
    tests.forEach(test => {
      let { args, expected } = test;
      let [a, b] = args;
      it(`adds ${a} and ${b} and expects to return : ${expected}`, function() {
        assert.equal(calc.add(a, b), expected);
      });
    });
  });

  describe("#subtract()", function() {
    const tests = [
      { args: [2, 5], expected: -3 },
      { args: [1000, 900], expected: 100 },
      { args: [-100, -700], expected: 600 }
    ];
    tests.forEach(test => {
      let { args, expected } = test;
      let [a, b] = args;
      it(`subtracts ${a} and ${b} and expects to return : ${expected}`, function() {
        assert.equal(calc.subtract(a, b), expected);
      });
    });
  });

  describe("#multiply()", function() {
    const tests = [
      { args: [2, 5], expected: 10 },
      { args: [1000, 900], expected: 900000 },
      { args: [-100, -700], expected: 70000 }
    ];
    tests.forEach(test => {
      let { args, expected } = test;
      let [a, b] = args;
      it(`multiply ${a} and ${b} and expects to return : ${expected}`, function() {
        assert.equal(calc.multiply(a, b), expected);
      });
    });
  });

  describe("#divide()", function() {
    const tests = [
      { args: [2, 5], expected: 0.4 },
      { args: [42, 6], expected: 7 },
      { args: [-100, -5], expected: 20 },
      { args: [100, 0], expected: Infinity }
    ];
    tests.forEach(test => {
      let { args, expected } = test;
      let [a, b] = args;
      it(`divide ${a} and ${b} and expects to return : ${expected}`, function() {
        assert.equal(calc.divide(a, b), expected);
      });
    });
  });

  describe("#square()", function() {
    const tests = [
      { args: [2], expected: 4 },
      { args: [12], expected: 144 },
      { args: [-10], expected: 100 }
    ];
    tests.forEach(test => {
      let { args, expected } = test;
      let [a] = args;
      it(`squares ${a} and expects to return : ${expected}`, function() {
        assert.equal(calc.square(a), expected);
      });
    });
  });

  describe("#square()", function() {
    const tests = [
      { args: [4], expected: 2 },
      { args: [144], expected: 12 },
      { args: [-16], expected: undefined }
    ];
    tests.forEach(test => {
      let { args, expected } = test;
      let [a] = args;
      it(`squareRoots ${a} and expects to return : ${expected}`, function() {
        assert.equal(calc.squareRoot(a), expected);
      });
    });
  });

  describe("#history()", function() {
    it("calls 3 functions then checks if history has 3 records", function() {
      calc.add(5, 2);
      calc.subtract(5, 2);
      calc.squareRoot(-16);
      assert.equal(calc.history().length, 3);
    });

    it("calls 11 functions then checks if history starts rolling over", function() {
      for (let i = 0; i < 9; i++) {
        calc.add(5, 2);
      }
      calc.subtract(5, 2);
      calc.squareRoot(-16);
      assert.equal(calc.history().length, 10);
      assert.equal(calc.history()[0].includes("squareRoot"), true);
    });
  });
});
