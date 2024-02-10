import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    input: "",
    isEdit: false,
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    handleEdits: (state, { payload }) => {
      state.isEdit = payload.id;
      state.input = payload.text;
    },
    updateEdit: (state, { payload }) => {
      const todo = state.todos.find((todo) => todo.id === state.isEdit);
      todo.text = payload;
      state.isEdit = false;
      state.input = "";
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      state.input = "";
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toogle: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.isCompleted = !todo.isCompleted;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toogle,
  setInput,
  handleEdits,
  updateEdit,
} = todoSlice.actions;

export default todoSlice.reducer;
