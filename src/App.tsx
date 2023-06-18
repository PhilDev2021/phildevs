import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UsersContextProvider } from "./contexts/UsersContext";
import AppLayout from "./components/AppLayout";
import User from "./components/User";

function App() {
  return (
    <>
      <UsersContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout />} />
            <Route path="/user" element={<h1>About</h1>}>
              <Route index element={<Navigate to=":id" />} />
              <Route path=":id" element={<User />} />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Router>
      </UsersContextProvider>
    </>
  );
}

export default App;
