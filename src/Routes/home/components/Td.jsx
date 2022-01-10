import React from "react";
import moment from "moment";
function Td({ text, tColour, hover, sColour, sText, date }) {
  return (
    <td className="p-2 whitespace-nowrap">
      <div
        className={`text-left ${tColour && `text-${tColour}-500`}   ${
          hover && " hover:underline"
        }`}
      >
        {sText ? sText : date ? moment(date).format("MMMM Do YYYY") : text}

        {sColour ? <span className={`text-${sColour}-500`}>{text}</span> : ""}
      </div>
    </td>
  );
}

export default Td;
