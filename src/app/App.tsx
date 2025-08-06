import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage";
import { NotFound404 } from "./../pages/page-404/page-404";
import { ConnetcError500 } from "./../pages/page-500/page-500";
import { RegistrationPage } from "./../pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "../pages/LoginPage/LoginPage.tsx";
import { ProfileInfo } from "@widgets/Profile/profile-info.tsx";
import { ProtectedRoute } from "./protected-route/Protected-route.tsx";
import { SkillPage } from "./../pages/SkillPage/SkillPage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/500" element={<ConnetcError500 />} />
        <Route path="/reg" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileInfo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
