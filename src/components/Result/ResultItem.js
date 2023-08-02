import React from "react";
const formatter = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const ResultItem = ({ yearData, initialInvestment }) => {
  console.log(yearData, initialInvestment);
  return (
    <tr>
      <td>{yearData.year}</td>
      <td>{formatter.format(yearData.savingsEndOfYear)}</td>
      <td>{formatter.format(yearData.yearlyInterest)}</td>
      <td>
        {formatter.format(
          yearData.savingsEndOfYear -
            initialInvestment -
            yearData.yearlyContribution * yearData.year
        )}
      </td>
      <td>
        {formatter.format(
          initialInvestment + yearData.yearlyContribution * yearData.year
        )}
      </td>
    </tr>
  );
};

export default ResultItem;
