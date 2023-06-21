import { React, useState, useEffect } from "react";
import styles from "./InvestmentForm.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const InvestmentForm = (props) => {
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
          />
        </div>
        <div className={styles.buttons}>
          <Button variant="contained" size = "large" sx = {{marginTop: '2rem', width: '20rem'}} color = "secondary">Calculate</Button>

          <Button variant="outlined" size = "large" sx = {{marginTop: '2rem', width: '10rem', borderColor: 'gray', color: 'gray'}}>Reset</Button>
        </div>
      </div>
    </>
  );
};
