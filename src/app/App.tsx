import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import { ModalUI } from "@shared/ui/modal/modalUi.tsx";

function App() {
  // Инициализируем хук для отслеживания предыдущего URL
  usePreviousUrl();

  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { backgroundLocation?: Location };
  const backgroundLocation = state?.backgroundLocation;

  return (
    <>
      {/*добавить в Route */}
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<HomePage />} />

        {/* Только для НЕавторизованных*/}
        <Route
          path="/login"
          element={
            <ProtectedRoute onlyUnAuth>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reg"
          element={
            <ProtectedRoute onlyUnAuth>
              <RegistrationPage />
            </ProtectedRoute>
          }
        />
        Только для Авторизованных
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileInfo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/favourites"
          element={
            <ProtectedRoute>
              <ProfileFavourites />
            </ProtectedRoute>
          }
        />
        <Route
          path="/skill/:userId"
          element={
            <ProtectedRoute>
              <SkillPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/500" element={<ConnetcError500 />} />
      </Routes>

      {backgroundLocation && (
        <Routes>
          {/* Модальное окно: Вы предложили обмен*/}
          <Route
            path="/proposal/sent"
            element={
              <ProtectedRoute>
                <ModalUI
                  title="Вы предложили обмен"
                  onClose={() => navigate(-1)}
                  image={""}
                  imageAlt={""}
                  description={"Теперь вы можете предложить обмен"}
                >
                  {/* Добавить нужный компонент */}
                </ModalUI>
              </ProtectedRoute>
            }
          />

          {/* Модальное окно: Ваше предложение создано */}
          <Route
            path="/proposal/created"
            element={
              <ProtectedRoute>
                <ModalUI
                  title="Ваше предложение создано"
                  onClose={() => navigate(-1)}
                  image={""}
                  imageAlt={""}
                  description={"Теперь вы можете предложить обмен"}
                >
                  {/* Добавить нужный компонент */}
                </ModalUI>
              </ProtectedRoute>
            }
          />
          {/*  Модальное окно: Создание предложения */}
          <Route
            path="/proposal/create"
            element={
              <ProtectedRoute>
                <ModalUI
                  title="При создании предложения"
                  onClose={() => navigate(-1)}
                  image={""}
                  imageAlt={""}
                  description={
                    "Пожалуйста, проверьте и подтвердите правильность данных"
                  }
                >
                  {/* Добавить нужный компонент */}
                </ModalUI>
              </ProtectedRoute>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
