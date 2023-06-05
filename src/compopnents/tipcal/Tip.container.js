import React, { PureComponent } from "react";
import TipComponent from "./Tip.component";

export class TipContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      billAmount: "",
      tipPercentage: 0,
      numberOfPeople: "",
      tipAmount: "0.00",
      amountPerPerson: "0.00",
    };
  }
  
  reset = () => {
    this.setState({
      billAmount: "",
      tipPercentage: 0,
      numberOfPeople: "",
      tipAmount: "0.00",
      amountPerPerson: "0.00",
    });
  };
  handleChange = e => {
    console.log(e);
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.calculateTip();
    });
  };
  calculateTip = () => {
    const { billAmount, tipPercentage, numberOfPeople } = this.state;
    const bill = parseFloat(billAmount);
    const tipPercent = parseFloat(tipPercentage) / 100;
    console.log(tipPercent);
    const people = parseInt(numberOfPeople);
    const tipAmount = bill * tipPercent;
    console.log(tipAmount);
    const totalAmount = bill + tipAmount;
    const amountPerPerson = totalAmount / people;

    if (people >= 1) {
      this.setState({
        tipAmount: `${parseFloat(tipAmount)}`,
        amountPerPerson: `${parseFloat(amountPerPerson)}`,
      });
    }
  };

  tip = {
      handleChange: this.handleChange.bind(this),
    reset: this.reset.bind(this),
      
  };

  render() {
    return (
      <div>
        <TipComponent {...this.state} {...this.tip} {...this.reset} />
      </div>
    );
  }
}

export default TipContainer;
