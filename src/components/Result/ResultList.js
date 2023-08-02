import React from "react";
import ResultItem from "./ResultItem";
import styles from "./Result.module.css";

const ResultList = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <ResultItem
            key={yearData.year}
            yearData={yearData}
            initialInvestment={props.initialInvestment}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ResultList;
