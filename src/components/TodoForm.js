import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormControl } from "@mui/material";

const TodoForm = () => {
  const [text, setText] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const onFormSubmit = async (e) => {
    dispatch(addNewTodo(text, content));
    setText("");
    setContent("");
  };
  const onInputChange = (e) => {
    setText(e.target.value);
  };
  const oncontentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <form className="form">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch"},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
  sx={{
    input: { color: "white" },
    "& .MuiInputLabel-root": { color: "white" },
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" }
  }}
  id="outlined-controlled"
  label="Title"
  className="textfield"
  value={text}
  onChange={onInputChange}
/>
        <TextField
          sx={{
            input: { color: "white" },
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" }
          }}
          id="outlined-controlled"
          label="Description"
          value={content}
          onChange={oncontentChange}
        />
      </Box>

      <FormControl>
        <Button
          variant="contained"
          color="warning"
          onClick={() => onFormSubmit()}
        >
          Add To-Do
        </Button>
      </FormControl>
    </form>
  );
};

export default TodoForm;
