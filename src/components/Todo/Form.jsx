import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setInput, updateEdit } from "../../redux/todoSlice";
function Form() {
  const text = useSelector((state) => state.todo.input);
  const isEdit = useSelector((state) => state.todo.isEdit);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(updateEdit(text));
    } else {
      const newTodo = {
        id: Math.random() * 10000,
        text,
        isCompleted: false,
      };
      dispatch(addTodo(newTodo));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch(setInput(e.target.value))}
        value={text}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-success min-w-[320px] mb-[20px]"
      />
    </form>
  );
}

export default Form;
