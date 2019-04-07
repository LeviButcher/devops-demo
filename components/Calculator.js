import React from "react";
import Calc from "../lib/calculator";
import RadioList from "./RadioList";
import InputList from "./InputList";

// Each option has a number of inputs to be displayed and a corresponding function
const operations = [
  {
    name: "add",
    inputs: 2
  },
  {
    name: "squareRoot",
    inputs: 1
  },
  {
    name: "subtract",
    inputs: 2
  },
  {
    name: "multiply",
    inputs: 2
  },
  {
    name: "divide",
    inputs: 2
  },
  {
    name: "square",
    inputs: 1
  }
];

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: operations[0].name
    };
    this.inputs = React.createRef();
    this.calc = new Calc();
  }

  updateOption(event) {
    const { value } = event.target;
    this.setState({
      selected: value
    });
  }

  updateResult(event) {
    const { selected } = this.state;
    operations.forEach(operator => {
      if (operator.name === selected) {
        let inputCollection = this.inputs.current.children;
        let values = [...inputCollection].map(input => {
          return Number(input.value);
        });
        const result = this.calc[selected](...values);
        this.setState({
          result: result
        });
      }
    });
  }

  render() {
    const { selected, result } = this.state;
    const inputNum = operations.find(item => item.name == selected).inputs;

    return (
      <div>
        <h3>Operations</h3>
        <RadioList
          valueList={operations.map(option => option.name)}
          selected={selected}
          callback={e => this.updateOption(e)}
        />
        <h3>Enter Values</h3>
        <InputList inputNum={inputNum} ref={this.inputs} />
        <button onClick={e => this.updateResult(e)}>Calculate Results</button>
        <h3>History</h3>
        <div>
          {this.calc.history().map(result => {
            return <h5 key={result}>{result}</h5>;
          })}
        </div>
      </div>
    );
  }
}

export default Calculator;
