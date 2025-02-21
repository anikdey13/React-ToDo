import React, {useState} from "react";

export const DateTime = () => {
  const [dateTime, setDateTime] = useState("");
  setInterval(() => {
    let dt = new Date();
    let formatedDate = dt.toLocaleDateString();
    let formatedTime = dt.toLocaleTimeString();
    setDateTime(`${formatedDate} - ${formatedTime}`);
  }, 1000);
  return (
    <>
      <div className="text-center mb-12 mt-4">
        <h1 className="text-white">{dateTime}</h1>
      </div>
    </>
  );
};
