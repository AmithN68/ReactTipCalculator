import React from "react";

class TipCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      billAmount: "",
      tipPercentage: "",
      numberOfPeople: "",
      tipAmount: 0,
      totalAmount: 0,
      amountPerPerson: 0,
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  calculateTip = () => {
    const { billAmount, tipPercentage, numberOfPeople } = this.state;
    const bill = parseFloat(billAmount);
    const tipPercent = parseFloat(tipPercentage) / 100;
    const people = parseInt(numberOfPeople);

    const tipAmount = bill * tipPercent;
    const totalAmount = bill + tipAmount;
    const amountPerPerson = totalAmount / people;

    this.setState({ tipAmount, totalAmount, amountPerPerson });
  };

  render() {
    const {
      billAmount,
      tipPercentage,
      numberOfPeople,
      tipAmount,
      totalAmount,
      amountPerPerson,
    } = this.state;

    return (
      <div>
        <h1>Tip Calculator</h1>
        <label>
          Bill Amount: $
          <input
            type="number"
            name="billAmount"
            value={billAmount}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Tip Percentage: %
          <input
            type="number"
            name="tipPercentage"
            value={tipPercentage}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of People:
          <input
            type="number"
            name="numberOfPeople"
            value={numberOfPeople}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button onClick={this.calculateTip}>Calculate Tip</button>
        <br />
        <h2>Tip Amount: ${tipAmount.toFixed(2)}</h2>
        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
        <h2>Amount Per Person: ${amountPerPerson.toFixed(2)}</h2>
      </div>
    );
  }
}

export default TipCalculator;
