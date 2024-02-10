import { Provider } from "react-redux";
import { store } from "./redux/store";
import TodoList from "./components/Todo/TodoList";
function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-[90px]">
    <h1 className="text-2xl font-bold mb-[20px] tracking-wide text-stone-500">My Todo</h1>
      <Provider store={store}>
        <TodoList />
      </Provider>
      <p className="mt-[50px] text-xl">by <span className="text-amber-500 underline underline-offset-2">Jasurbek</span></p>
    </div>
  );
}
export default App;
