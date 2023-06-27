import React, { useState } from "react";
import styles from "./InvestmentForm.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Table } from "./Table";

export const InvestmentForm = (props) => {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState({});

  const changeHandler = (event) => {
    setInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const clickHandler = (event) => {
    setToggle(true);
  };

  const resetHandler = (event) => {
    setToggle(false);
    setInput({});
  };

  return (
    <>
      <div className={styles.encompass}>
        <div className={styles.form}>
          <TextField
            id="outlined-basic"
            label="CURRENT SAVINGS"
            placeholder="₹"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            name="currentSavings"
            onChange={changeHandler}
            value={input.currentSavings}
          />
          <TextField
            id="outlined-basic"
            label="YEARLY SAVINGS"
            placeholder="₹"
            variant="filled"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            name="yearlySavings"
            onChange={changeHandler}
            value={input.yearlySavings}
          />
          <TextField
            id="outlined-basic"
            label="EXPECTED INTEREST"
            placeholder="Per Year (%)"
            variant="filled"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            name="expectedInterest"
            onChange={changeHandler}
            value={input.expectedInterest}
          />
          <TextField
            id="outlined-basic"
            label="INVESTMENT DURATION"
            placeholder="In Years"
            variant="filled"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            name="investmentDuration"
            onChange={changeHandler}
            value={input.investmentDuration}
          />
        </div>
        <div className={styles.buttons}>
          <Button
            variant="contained"
            size="large"
            sx={{ marginTop: "2rem", width: "20rem" }}
            color="secondary"
            onClick={clickHandler}
          >
            Calculate
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              marginTop: "2rem",
              width: "10rem",
              borderColor: "gray",
              color: "gray",
            }}
            onClick={resetHandler}
          >
            Reset
          </Button>
        </div>
      </div>
      {toggle ? <Table /> : <h4>Nothing Calculated Yet</h4>}
    </>
  );
};
