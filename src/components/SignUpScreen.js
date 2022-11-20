import React, { useRef, useState } from "react";
// import { db } from '../firebase'
import "../styles/SignUpScreen.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import BootstrapInput from "./BootstrapInput";
import Dialogshow from "./Dialogshow";
import { useDispatch } from "react-redux";
import { setDialog } from "../features/dialog/dialogSlice";
import FormInput from "./FormInput";

const SignUpScreen = () => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    username: "",
    bankid: "",
    password: "",
    bank: "",
  });
  const dispatch = useDispatch();
  const [bank, setBank] = useState("");

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be Thai or English and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z]+$||[ก-์]+$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Lastname",
      label: "LastName",
      errorMessage: "Lastname should be same language as name!",
      pattern: values.name.match(/[A-za-z]+/) ? "^[A-Za-z]+$" : "^[ก-์]+$",
      required: true,
    },
    {
      id: 3,
      name: "username",
      type: "tel",
      placeholder: "Username",
      errorMessage: "Username should be a phone number!",
      label: "Username",
      pattern: "^[0][6][0-9]{8}$||^[0][8][0-9]{8}$||^[0][9][0-9]{8}$",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should start with uppercase letters, don't include special characters!",
      label: "Password",
      pattern: "^[A-Z][a-z]+$",
      required: true,
    },
    {
      id: 6,
      name: "bankid",
      type: "text",
      errorMessage: "Bank Number should be a number and Maximun 10 characters!",
      placeholder: "Bank Number",
      label: "Bank Number",
      pattern: "^[0-9]{1,10}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(setDialog());
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setBank(event.target.value);
    onChange(event);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  return (
    <div className="signup-screen">
      <div className="signup-bg">
        <div className="signup-gradient"></div>
      </div>
      <div className="signup-body">
        <div className="signup-screen-form">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <label>Bank</label>
            <Select
              id="demo-simple-select"
              labelId="demo-simple-select-label"
              required
              value={bank}
              onChange={handleChange}
              input={<BootstrapInput />}
              label="Bank"
              name="bank"
            >
              <MenuItem value="scb">SCB</MenuItem>
              <MenuItem value="kbank">KBANK</MenuItem>
              <MenuItem value="bangkok">BANGKOK</MenuItem>
            </Select>
            <button>Submit</button>
          </form>
          <Dialogshow data={values} />
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
