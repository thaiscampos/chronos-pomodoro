import "./styles/global.css";
import "./styles/theme.css";

import { Home } from "./pages/Home";
import { TaskContext } from "./contexts/TaskContext";

export function App() {
  return (
    <TaskContext.Provider value={valu: 'faf'}>
      <Home />
    </TaskContext.Provider>
  );
}
