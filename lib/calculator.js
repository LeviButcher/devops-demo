"use strict";
// Change support to pass in history length, then rewrite
// Max length of 10
const MAX_HISTORY = 10;

class Calculator {
  constructor(historyLength = MAX_HISTORY) {
    this.historyArr = new Array(historyLength);
  }

  add(a, b) {
    const result = a + b;
    this.addToHistory(`add(${a}, ${b}) => ${result}`);
    return result;
  }
  subtract(a, b) {
    const result = a - b;
    this.addToHistory(`subtract(${a}, ${b}) => ${result}`);
    return result;
  }

  multiply(a, b) {
    const result = a * b;
    this.addToHistory(`multiply(${a}, ${b}) => ${result}`);
    return result;
  }

  divide(a, b) {
    let result = a / b;
    this.addToHistory(`divide(${a}, ${b}) => ${result}`);
    return result;
  }

  square(a) {
    const result = a * a;
    this.addToHistory(`square(${a}) => ${result}`);
    return result;
  }

  squareRoot(a) {
    let result;
    if (a < 0) {
      result = undefined;
    } else {
      result = Math.sqrt(a);
    }
    this.addToHistory(`squareRoot(${a}) => ${result}`);
    return result;
  }

  addToHistory(statement) {
    // history should show newest to oldest
    let length = this.historyArr.unshift(statement);
    this.historyArr = this.historyArr.slice(0, length - 1);
  }

  history() {
    return this.historyArr.reduce((acc, curr) => {
      if (curr) {
        acc.push(curr.toString());
      }
      return acc;
    }, []);
  }

  printHistory() {
    console.log(
      "~ History ~ \n" +
        this.historyArr.map((row, index) => `${++index}: ${row} \n`).join("") +
        "~ End ~ "
    );
  }
}

module.exports = Calculator;
