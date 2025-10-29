import { Route, Routes } from "react-router";
import ProtectedRoutes from "./shared/layout/ProtectedRoutes";
import { useState } from "react";
import Auth from "./pages/auth";
import Login from "./pages/auth/login";
import Registration from "./pages/auth/registration";
import Home from "./pages/home";
import Participants from "./pages/participants";
import Competitions from "./pages/competitions";
import Results from "./pages/results";

function App() {
  return (
    <Routes>
      <Route path="auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>

      <Route path="/" element={<ProtectedRoutes />}>
        <Route index element={<Home />} />
        <Route path="competitions" element={<Competitions />} />
        <Route path="participants" element={<Participants />} />
        <Route path="results" element={<Results />} />
      </Route>

      <Route path="*" element={<p>404 <a href="/">Go back</a></p>} />
    </Routes>
  )
}

export default App