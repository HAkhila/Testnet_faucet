import React from "react";
import "./FormInput.css";
import polygon from "../img/polygon.jpg";
import ethereum from "../img/ethereum.png";
import binance from "../img/binance.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { IoCaretDownCircleSharp } from "react-icons/io5";

function BasicButtonExample() {
  return (
    <div className="formInputdropdownContainer">
      <DropdownButton
        variant=""
        className="formInputdropdown formInputofNetwork"
        id=""
        title={
          <div>
            Network
            <IoCaretDownCircleSharp />
          </div>
        }
      >
        <Dropdown.Item href="#/action-1">
          {" "}
          <img className="dropdown-img" src={polygon} />
          Polygon
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          {" "}
          <img className="dropdown-img" src={ethereum} />
          Ethereum
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          {" "}
          <img className="dropdown-img" src={binance} />
          Binance
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

function FormInput() {
  return (
    <div className="bg">
    <div className="formInput">
      <div className="formInputCard">
        <div className="formInputCardHeadingContainer">
          <span className="formInputCardHeading">
            Blockport Testnet
            <br /> Faucet
          </span>
        </div>
        <div className="formInputFormContainer">
          <form className="" onSubmit={(event) => event}>
            <div className="formInputFormWalletAddContainer">
              <input
                type="Address"
                className="formInputFormWalletAddInput"
                placeholder="Enter Wallet Address"
              />
            </div>
            <div className="formInputdropdown">
              <BasicButtonExample />
            </div>
            <div className="formInputFormFundButtonContainer">
              <button
                className="formInputFormFundButtonContainer2"
                type="submit"
              >
                Fund Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default FormInput;
