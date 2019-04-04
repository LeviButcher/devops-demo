import React from "react";
import Calc from "../lib/calculator";

// Each option has a number of inputs to be display and a corresponding function
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
  }
];
const calc = new Calc();

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: operations[0].name
    };
    this.inputs = React.createRef();
  }

  updateOption(event) {
    const { value } = event.target;
    this.setState({
      selected: value
    });
  }

  updateResult(event) {
    const { selected } = this.state;
    console.log("selected", selected);
    operations.forEach(operator => {
      if (operator.name === selected) {
        let inputCollection = this.inputs.current.children;
        let values = [...inputCollection].map(input => {
          return Number(input.value);
        });
        console.log(values);
        const result = calc[selected](...values);
        this.setState({
          result: result
        });
      }
    });
  }

  render() {
    const { selected, result } = this.state;
    return (
      <div>
        {operations.map((operator, index) => {
          return (
            <input
              key={operator.name}
              type="radio"
              name="operator"
              value={operator.name}
              checked={selected == operator.name}
              onChange={e => this.updateOption(e)}
            />
          );
        })}
        <h3>Enter Values</h3>
        {(() => {
          const operator = operations.find(item => item.name == selected);
          console.log("operator", operator);
          return (
            <div ref={this.inputs}>
              {new Array(operator.inputs).fill("Why").map(item => {
                return <input type="number" />;
              })}
            </div>
          );
        })()}
        <button onClick={e => this.updateResult(e)}>Calculate Results</button>
        {(() => {
          if (result) {
            return <h5>{result}</h5>;
          }
        })()}
      </div>
    );
  }
}

export default Calculator;
