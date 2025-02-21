import React, { useState } from "react";

export const TodoForm = ({addTask}) => {

  const [inputVal, setInputVal] = useState("");

  const handleInputValue = (e) => {
    setInputVal(e.target.value);
  };

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    addTask(inputVal);
    setInputVal("");
  }
  
  
  return (
    <div className="text-center">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={inputVal}
          onChange={handleInputValue}
          className="my-4 mr-2 border-2 border-black p-2 rounded-md"
        />
        <button
          type="submit"
          className="border-2 border-black py-2 px-4 rounded-md bg-black text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
};
