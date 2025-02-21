import React, { useState } from "react";

import { TodoForm } from "./TodoForm";
import { DateTime } from "./DateTime";
import { TodoItem } from "./TodoItem";
import { getLocalStorage, setLocalStorage } from "./LocalStorage";



const Todo = () => {
  const [task, setTask] = useState(()=> getLocalStorage());

  const handleFormSubmit = (inputVal) => {
    if (inputVal.trim() === "") return;
    setTask((prevTask) => [...prevTask, { text: inputVal, completed: false }]);
  };
  const handleCompletedTask = (idx) => {
    setTask((prevTasks) =>
      prevTasks.map((task, i) =>
        i === idx ? { ...task, completed: !task.completed } : task
        
      )
    );
    
  };

  // Setting data to the browser local storage
  setLocalStorage(task);
  const handleDeleteTask = (idx) => {
    setTask(task.filter((_, i) => i !== idx));
  };

  const handleDeleteAll = () => {
    setTask([]);
  };

  return (
    <>
      <div className="todo-wrapper">
        <h1 className="text-2xl font-bold text-white text-center mt-4">
          Tasks
        </h1>
        {/* Add task form */}
        <TodoForm addTask={handleFormSubmit} />

        {/* Date & Time */}
        <DateTime />

        <div className="w-[80%] m-auto p-2">
          {/* Task List */}
          <ul className="flex flex-col justify-start items-start">
            {task.map((currElement, idx) => {
              return (
                // Task Item
                <TodoItem
                  key={idx || currElement}
                  idx={idx}
                  currElement={currElement}
                  completedTask={handleCompletedTask}
                  deleteTask={handleDeleteTask}
                />
              );
            })}
          </ul>
          <div className="text-center">
            {task.length !== 0 ? (
              <button
                onClick={handleDeleteAll}
                className="btn"
              >
                Delete All
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
