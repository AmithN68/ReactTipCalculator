import React, { PureComponent } from "react";
import Styles from "./Tip.css";
import { FaUserAlt } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";

export class TipComponent extends PureComponent {
  render(props) {
    const {
      billAmount,
      tipPercentage,
      numberOfPeople,
      tipAmount,
      amountPerPerson,
      handleChange,
      reset,
    } = this.props;
    return (
      <div id={Styles.divisionBlock}>
        <div className="divBlock">
          <div className="div1">
            <h2>SPLI</h2>
            <h2>TTER</h2>
          </div>
          <div className="mainDiv">
            <div className="div2">
              <div className="divi1">
                <h3>Bill</h3>
                <BiDollar className="dollar" />
                <input
                  type="number"
                  name="billAmount"
                  value={billAmount}
                  onChange={handleChange}
                  placeholder="0"
                />
              </div>
              <div className="divi2">
                <h3>Select Tip %</h3>
                <div className="btn">
                  <button onClick={handleChange} name="tipPercentage" value="5">
                    5%
                  </button>
                  <button
                    onClick={handleChange}
                    name="tipPercentage"
                    value="10"
                  >
                    10%
                  </button>
                  <button
                    onClick={handleChange}
                    name="tipPercentage"
                    value="15"
                  >
                    15%
                  </button>
                  <button
                    onClick={handleChange}
                    name="tipPercentage"
                    value="25"
                  >
                    25%
                  </button>
                  <button
                    onClick={handleChange}
                    name="tipPercentage"
                    value="50"
                  >
                    50%
                  </button>
                  <input
                    type="number"
                    className="cus"
                    name="tipPercentage"
                    onChange={handleChange}
                    placeholder="Custom"
                  />
                </div>
              </div>
              <div className="divi3">
                <h3>Number of People</h3>
                <h6 className={numberOfPeople != 0 ? "heading1" : "heading"}>
                  Can't be zero
                </h6>
                <FaUserAlt className="user" />
                <input
                  placeholder="0"
                  type="number"
                  id="input11"
                  name="numberOfPeople"
                  value={numberOfPeople}
                  onChange={handleChange}
                  className={numberOfPeople != 0 ? "input1" : "input"}
                />
              </div>
            </div>
            <div className="div3">
              <div className="divs1">
                <label htmlFor="">
                  Tip Amount <br />
                  <span>/Person</span>
                </label>
                <h5 className="head">${tipAmount.slice(0, 5)}</h5>
              </div>
              <div className="divs2">
                <label htmlFor="">
                  Total
                  <br />
                  <span>/Person</span>
                </label>
                <h5 className="head">${amountPerPerson.slice(0, 5)}</h5>
              </div>
              <button onClick={reset}>RESET</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TipComponent;
