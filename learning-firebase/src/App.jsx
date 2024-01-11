import React, { useEffect, useState } from "react";
import Auth from "./components/Auth";
import { db } from "./config/firebase-config";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  //CRUD

  // initialize tasks
  const [tasktitle, setTasktitle] = useState("");
  const [taskDec, setTaskDec] = useState("");
  const [doneOrNot, setDoneOrNot] = useState(false);

  // updateTitle state
  const [newUpdateTitle, setNewUpdateTitle] = useState("");

  const tasksCollectionRef = collection(db, "tasks");

  const getTasksList = async () => {
    try {
      const data = await getDocs(tasksCollectionRef);
      const filteredData = data.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));

      setTasks(() => [...filteredData]);
      console.log(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getTasksList();
  }, []);

  const onSubmitTask = async () => {
    try {
      await addDoc(tasksCollectionRef, {
        title: tasktitle,
        description: taskDec,
        checkBox: doneOrNot,
        date: null,
      });
      getTasksList();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      const taskDoc = doc(db, "tasks", id);
      await deleteDoc(taskDoc);
      getTasksList();
    } catch (err) {
      console.log(err);
    }
  };
  
  const updateTitle = async (id) => {
    try {
      const taskDoc = doc(db, "tasks", id);
      await updateDoc(taskDoc, { title: newUpdateTitle });
      getTasksList();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div style={{ margin: "10px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTasktitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setTaskDec(e.target.value)}
        />
        <input
          type="checkbox"
          id="checkBos"
          checked={doneOrNot}
          onChange={(e) => setDoneOrNot(e.target.checked)}
        />
        <label htmlFor="checkBox">DoneOrNot?</label>
        <button onClick={onSubmitTask}>Submit</button>
      </div>
      <div>
        <Auth />
        {tasks.map((task, key) => (
          <div key={key}>
            <Tasks data={task} />
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <input
              type="text"
              onChange={(e) => setNewUpdateTitle(e.target.value)}
              placeholder="new Title.."
            />
            <button onClick={() => updateTitle(task.id)}>Change Title</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
