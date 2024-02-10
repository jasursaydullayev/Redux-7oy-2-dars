import { useSelector } from "react-redux";
import Form from "./Form";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <>
      <Form />
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} todos={{ ...todo, index }} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
