import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import DetailPage from "./pages/DetailPage";
import UsersLayout from "./Layouts/UsersLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UsersLayout/>}>
        <Route index element={<UsersPage />} />
        <Route path=":id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
