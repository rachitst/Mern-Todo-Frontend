import "./App.css";
/*components */
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <div className="main-container">
        <Header />
        <TodoForm />
        <Todos />
      </div>
    </div>
  );
}

export default App;
