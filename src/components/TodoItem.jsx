import React from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";

import { MdDelete } from "react-icons/md";
export const TodoItem = ({idx, currElement, completedTask, deleteTask }) => {

  const handleCompletedTask = () => {
    completedTask(idx);
  };
  
  const handleDeleteTask = () => {
    deleteTask(idx);
  };
  return (
      <li
        className="list-item"
      >
        <div className="flex items-center gap-2">
          <button onClick={handleCompletedTask}>
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
};
