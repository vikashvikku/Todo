import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  Modal,
} from "@mui/material";
import React, { useState } from "react";
import "./Todo.css";
import db from "../firebase";
import DeleteIcon from "@mui/icons-material/Delete";

let timestamp = new Date().getTime();
const Todo = (props) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set({}, { merge: true });
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div>
          <h1> I am Modal</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}> Update Todo</Button>
        </div>
      </Modal>

      <List className="todo_list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={props.todo.todo}
            // secondary="March 17, 05:00 PM"
            secondary={new Date(timestamp).toLocaleString()}
          />
        </ListItem>
        <button onClick={(e) => setOpen(true)}> Edit </button>
        <Button
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          <DeleteIcon style={{ color: "red" }} />
        </Button>
      </List>
    </>
  );
};

export default Todo;
