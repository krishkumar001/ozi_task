import { useEffect, useState } from "react";
import api from "./services/api";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import KanbanBoard from "./components/KanbanBoard";

export default function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (auth) {
      api.get("/tasks").then(res => setTasks(res.data));
    }
  }, [auth]);

  if (!auth) {
    return (
      <>
        <Register />
        <Login setAuth={setAuth} />
      </>
    );
  }

  return (
    <>
      <Profile />
      <KanbanBoard tasks={tasks} setTasks={setTasks} />
    </>
  );
}
