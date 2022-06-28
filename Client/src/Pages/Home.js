//Move Delete Task To Task Compounent
import React, { useState, useEffect, createContext } from "react";
import Task from "./Task";
import FetchFromServer from "./FetchFromServer";
import TodoForm from "./TodoForm";
import { Grid } from "@mui/material";

export const TodoContext = createContext("TodoContext");

function Home() {
  const [TodoList, setTodoList] = useState(() => {
    const Saved = localStorage.getItem("TodoList");
    return Saved ? JSON.parse(Saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(TodoList));
    console.log("TodoList Changed");
  }, [TodoList]);

  return (
    <TodoContext.Provider value={[TodoList, setTodoList]}>
      <Grid
        container
        style={{ margin: "auto" }}
        width={400}
        rowSpacing={3}
        p={3}
      >
        <Grid item xs={12}>
          <FetchFromServer setTodoList={setTodoList} />
        </Grid>

        <TodoForm TodoList={TodoList} setTodoList={setTodoList} />

        <Grid item xs={12}>
          {TodoList.map((item) => (
            <Task data-testid="Task" key={item.id} TaskInfo={item} />
          ))}
        </Grid>
      </Grid>
    </TodoContext.Provider>
  );
}

export default Home;
