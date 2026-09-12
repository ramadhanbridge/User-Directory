import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users">
        <Route index element={<UsersPage />} />
        <Route path=":id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
