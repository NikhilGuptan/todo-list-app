import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoTask from "./components/todoTask";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [title, setTitle] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editOn, setEditOn] = useState(false);
  const [editTodoId, setEditTodoId] = useState("");
  console.log("todoListtodoList---->", todoList);

  const deleteTodo = (id) => {
    const filterTodo = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(filterTodo);
  };

  return (
    <div className="App">
      <nav className="navBar">
        <div className="margin10">
          <h3 style={{ marginBottom: "0px" }}>GYIZER</h3>
          <p style={{ marginTop: "0px" }}>TODO APP</p>
        </div>
      </nav>
      <div className="add-todo-div">
        <div>
          <input
            type="text"
            className="input-to-add bagrondAndColor"
            style={{ marginBottom: "5px" }}
            value={title}
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="input-to-add bagrondAndColor"
            value={inputValue}
            placeholder="Input..."
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div>
          {editOn ? (
            <button
              className="update-tod-button"
              onClick={() => {
                if (title === "" || inputValue === "") {
                  alert("Please add some Data in Input.");
                  return;
                }
                const newData = todoList.map((todo) => {
                  if (todo.id === editTodoId) {
                    return { ...todo, title: title, value: inputValue };
                  }
                  return todo;
                });
                setTodoList(newData);
                setTitle("");
                setInputValue("");
                setEditOn(false);
              }}
            >
              Update
            </button>
          ) : (
            <button
              className="add-tod-button"
              onClick={() => {
                if (title === "" || inputValue === "") {
                  alert("Please add some Data in Input.");
                  return;
                }
                const newTodo = {
                  title: title,
                  value: inputValue,
                  id: uuidv4(),
                };
                setTodoList([...todoList, newTodo]);
                setTitle("");
                setInputValue("");
              }}
            >
              +
            </button>
          )}
        </div>
      </div>
      <div className="todo-show-list">
        {todoList.length ? (
          <>
            {todoList.map((todo) => {
              return (
                <TodoTask
                  todo={todo}
                  key={todo.id}
                  setEditOn={setEditOn}
                  setTitle={setTitle}
                  setInputValue={setInputValue}
                  setEditTodoId={setEditTodoId}
                  deleteTodo={deleteTodo}
                />
              );
            })}
          </>
        ) : (
          <div style={{ margin: "auto" }}>
            <p style={{fontSize:"35px"}}>No Tasks</p>
          </div>
        )}
      </div>
      <div className="bottom-bar"></div>
    </div>
  );
}

export default App;
