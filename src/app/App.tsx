import { Route, Routes, useNavigate} from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage";
import { NotFound404 } from "./../pages/page-404/page-404";
import { ConnetcError500 } from "./../pages/page-500/page-500";
import { RegistrationPage } from "./../pages/RegistrationPage/RegistrationPage";
import { ProfileMenu } from "@widgets/Profile/ProfileMenu";
import { LoginPage } from "../pages/LoginPage/LoginPage.tsx";
import { ProfileInfo } from "@widgets/Profile/profile-info.tsx";
import { ProtectedRoute } from "./protected-route/Protected-route.tsx";
import {ModalUI} from "@shared/ui/modal/modalUi.tsx";

// import { useEffect, useState } from 'react'
// import { fetchUsersData } from '@api/User/User-api'
// // import type { User } from '@entities/User/types'

function App() {


  // Раскомментировать при сборки маршрутов
  // const location = useLocation();
  const navigate = useNavigate();
  // const state = location.state as { backgroundLocation?: Location };
  // const backgroundLocation = state?.backgroundLocation;

  // @ts-ignore
  return (
    <>
      {/*добавить в Route location={backgroundLocation || location}*/}
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Только для НЕавторизованных*/}

        <Route
          path="/login"
          element={
        <ProtectedRoute onlyUnAuth >
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

        {/*<Route*/}
        {/*  path="/profile/favourites"*/}
        {/*  element={*/}
        {/*    <ProtectRouter>*/}
        {/*      <Favourites />*/}
        {/*    </ProtectRouter>*/}
        {/*  }*/}
        {/*/>*/}

        <Route path="*" element={<NotFound404 />} />
        <Route path="/500" element={<ConnetcError500 />} />
      </Routes>

      {/* Обернуть Routes в {backgroundLocation && () }*/}
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
                    description={"Пожалуйста, проверьте и подтвердите правильность данных"}
                >
                    {/* Добавить нужный компонент */}
                </ModalUI>
            </ProtectedRoute>

          }
        />
      </Routes>
    </>
  );
}

export default App
