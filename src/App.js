import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import AddUserPage from "./pages/AddUserPage";
import HomePage from "./pages/HomePage";
import ViewUserPage from "./pages/ViewUserPage";
import EditUserPage from "./pages/EditUserPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/addUser' element={<AddUserPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/viewUser/:id' element={<ViewUserPage />} />
        <Route path='/editUser/:id' element={<EditUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
