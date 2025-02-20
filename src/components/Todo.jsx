import React, { useState } from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";

import { MdDelete } from "react-icons/md";

const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");  

  const handleInputValue = (e) => {
    setInputVal(e.target.value);
  };
  const handleCompletedTask = (idx) => {
    setTask((prevTasks) =>
      prevTasks.map((task, i) =>
        i === idx ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const handleDeleteTask = (idx) => {
    setTask(task.filter((_, i)=> i !== idx));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim() === "") return;
    setTask((prevTask) => [...prevTask, { text: inputVal, completed: false }]);
    setInputVal("");
  };

  const handleDeleteAll = () => {
    setTask([]);
  }

  setInterval(() => {
    let dt = new Date();
    let formatedDate = dt.toLocaleDateString();
    let formatedTime = dt.toLocaleTimeString();
    setDateTime(`${formatedDate} - ${formatedTime}`);
  }, 1000);

  return (
    <>
      <div className="w-[425px] mx-auto p-4 border-2 h-screen  rounded-xl bg-[#2c3e50]">
        <h1 className="text-2xl font-bold text-white text-center mt-4">
          Tasks
        </h1>
        {/* Add task form */}
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

        {/* Date & Time */}
        <div className="text-center mb-12 mt-4">
          <h1 className="text-white">{dateTime}</h1>
        </div>

        <div className="w-[80%] m-auto p-2">
          {/* Task List */}
          <ul className="flex flex-col justify-start items-start">
            {task.map((currElement, idx) => {
              return (
                // Task Item
                <li
                  key={idx}
                  className="text-xl flex w-full justify-between items-center bg-black text-white py-2 px-4 rounded-md mb-4"
                >
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleCompletedTask(idx)}>
                      {currElement.completed ? (
                        <RiCheckboxCircleLine size={25} />
                      ) : (
                        <RiCheckboxBlankCircleLine size={25} />
                      )}
                    </button>
                    <span
                      className={`mt-[-5px] ${
                        currElement.completed ? "line-through" : ""
                      }`}
                    >
                      {currElement.text}
                    </span>
                  </div>
                  <button onClick={() => handleDeleteTask(idx)}>
                    <MdDelete size={25} />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="text-center">
            { task.length !== 0 ? 
          <button onClick={handleDeleteAll} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete All</button> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
