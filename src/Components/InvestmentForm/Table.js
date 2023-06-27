import "./Table.css";
import { dummyInvestmentData } from "../Constants/Constant";
import styles from './Table.module.css';

const Table = (props) => {
  return (
    <>
      <table className="table mt-5">
        <thead className = {styles.heading}>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody className = {styles.data}>
          {dummyInvestmentData.map((dummyInvestmentData) => (
            <tr key={dummyInvestmentData.year}>
              <td>{dummyInvestmentData.year}</td>
              <td>{dummyInvestmentData.totalSavings}</td>
              <td>{dummyInvestmentData.interest}</td>
              <td>{dummyInvestmentData.totalInterest}</td>
              <td>{dummyInvestmentData.investedCapital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export { Table };
