import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";
import { useState } from "react";
import { Button, FormControl } from "@mui/material";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const [content, setContent] = useState(todo.content);
  const dispatch = useDispatch();

  const editTodoDetails = async () => {
    setEditing((prevState) => !prevState);
    console.log(text, content);
    dispatch(updateTodo(todo._id, text, content));
  };
  const onValueChange = (e) => {
    setText(e.target.value);
  };
  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <li className="task">
      <div className="text" style={{}}>
        <span
          style={{
            display: editing ? "none" : "",
            textDecoration: todo.done ? "line-through" : "",
            color: todo.done ? "#ffffff" : "#FFA500",
          }}
        >
          Task : {todo.text}{" "}
        </span>
        <br></br>
        <form style={{ display: editing ? "inline" : "none" }}>
          <input
            type="text"
            value={text}
            className="edit-todo"
            onChange={(e) => onValueChange(e)}
          />
        </form>
        <span
          style={{
            display: editing ? "none" : "",
            textDecoration: todo.done ? "line-through" : "",
            color: todo.done ? "#ffffff" : "",
          }}
        >
          Description : {todo.content}
        </span>
        <form style={{ display: editing ? "inline" : "none" }}>
          <input
            type="text"
            value={content}
            className="edit-todo"
            onChange={(e) => onContentChange(e)}
          />
        </form>
      </div>
      <br></br>
      <FormControl style={{ display: editing ? "" : "none" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editTodoDetails()}
        >
          Edit To-Do
        </Button>
      </FormControl>

      <span
        className="icon-trash"
        onClick={() => dispatch(deleteTodo(todo._id))}
      >
        <i className="fas fa-trash"></i>
      </span>
      <span
        className="icon"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        <i className="fas fa-pen"></i>
      </span>
      <span className="icon-check" onClick={() => dispatch(toggleTodo(todo._id))}>
        <i className="fas fa-check"></i>
      </span>
    </li>
  );
};

export default Todo;
