import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage";
import { NotFound404 } from "./../pages/page-404/page-404";
import { ConnetcError500 } from "./../pages/page-500/page-500";
import { RegistrationPage } from "./../pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "../pages/LoginPage/LoginPage.tsx";
import { ProtectedRoute } from "./protected-route/Protected-route.tsx";
import { SkillPage } from "./../pages/SkillPage/SkillPage.tsx";
import { ProfilePage } from "./../pages/ProfilePage/ProfilePage.tsx";
import { ProfileFavourites } from "@widgets/Profile/profile-favourites.tsx";
import { ProfileInfo } from "@widgets/Profile/profile-info.tsx";
import { usePreviousUrl } from "../shared/hooks/usePreviousUrl";
import { RegistrationSuccessModal } from "@widgets/RegistrationSuccess/RegistrationSuccessModal.tsx";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const background = location.state?.background;
  
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
        @font-face {
          font-family: "Jost";
          src: url('${import.meta.env.BASE_URL}fonts/jost/Jost-Medium.ttf') format("truetype");
          font-weight: 500;
          font-style: normal;
        }

        @font-face {
          font-family: "Roboto-Regular";
          src: url('${import.meta.env.BASE_URL}fonts/roboto/Roboto-Regular.ttf') format("truetype");
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: "Roboto-Medium";
          src: url('${import.meta.env.BASE_URL}fonts/roboto/Roboto-Medium.ttf') format("truetype");
          font-weight: 500;
          font-style: normal;
        }
    `

    document.head.appendChild(style);
  }, []);

  usePreviousUrl();
  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/500" element={<ConnetcError500 />} />
        <Route path="/skill/:userId" element={<SkillPage />} />

        <Route
          path="/reg"
          element={
            <ProtectedRoute onlyUnAuth>
              <RegistrationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute onlyUnAuth>
              <LoginPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        >
          <Route index element={<ProfileInfo />} />
          <Route path="favourites" element={<ProfileFavourites />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/reg-success" element={<RegistrationSuccessModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;
