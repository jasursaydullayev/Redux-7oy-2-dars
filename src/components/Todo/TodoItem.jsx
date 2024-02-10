import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, handleEdits, toogle } from "../../redux/todoSlice";

function TodoItem({ todos }) {
  const dispatch = useDispatch();
  const { id, text, isCompleted, index } = todos;

  const handleEdit = () => {
    dispatch(handleEdits(todos));
  };
  return (
    <div className="flex gap-[40px] border-x-4 border-indigo-500 px-[10px] rounded-lg items-center mb-[10px]">
      <li
        className="bordered w-[120px]"
        onClick={() => dispatch(toogle(id))}
        style={{ textDecoration: isCompleted ? "line-through" : "" }}
      >
        <h1 className="text-xl font-semibold">{index + 1}. {text}</h1>
      </li>
      <div className="ml-[5px] flex gap-[10px]">
        <button
          className="btn btn-outline btn-error w-[55px]"
          onClick={() => dispatch(deleteTodo(id))}
        >
          Del
        </button>
        <button
          className="btn btn-outline btn-warning w-[55px] mr-[5px]"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
