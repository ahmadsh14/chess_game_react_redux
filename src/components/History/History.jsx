import React from "react";
import { useSelector } from "react-redux";
const History = () => {
  const { firstLocation } = useSelector((state) => state);
  console.log("firstLocation: ", firstLocation[0]?.oldHistory);

  return (
    <>
      {Array.isArray(firstLocation) &&
        firstLocation.map((ele, i) => (
          <div key={i}>
            <p>{`${ele?.oldHistory.piece.sim}(${ele?.oldHistory?.row}-${ele?.oldHistory?.col}) => (${ele?.newRowLocation}-${ele?.newColLocation})`}</p>
          </div>
        ))}
    </>
  );
};

export default History;
