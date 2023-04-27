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
    db.collection("todos")
      .doc(props.todo.id)
      .set({ todo: input }, { merge: true });
    setOpen(false);
  };

  return (
    <>
      <div className="todo">
        <Modal open={open} onClose={() => setOpen(false)}>
          <div>
            <h1>DO your Changes</h1>
            <input
              placeholder={props.todo.todo}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button type="Submit" className="update-todo" onClick={updateTodo}>
              Update Todo
            </Button>
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
          <Button onClick={() => setOpen(true)}> Edit </Button>
          <Button
            onClick={() => db.collection("todos").doc(props.todo.id).delete()}
          >
            <DeleteIcon style={{ color: "red" }} />
          </Button>
        </List>
      </div>
    </>
  );
};

export default Todo;
