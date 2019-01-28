import React from "react";

const ResultRow = props => {
  return (
    <tr>
      <td className="col-xs-3">{props.label}</td>
      <td className="col-xs-1"> </td>
      <td className="col-xs-5">{props.value}</td>
      <td className="col-xs-3"> </td>
    </tr>
  );
};

export default ResultRow;
