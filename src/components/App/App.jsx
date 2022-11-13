import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { useSelector } from 'react-redux';
// import { getUserToken } from 'redux/userState';
import { ToastContainer } from 'react-toastify';
import PrivateRoutes from 'components/PrivateRoutes';
import PublicRoutes from 'components/PublicRoutes.jsx';
import { Application } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = lazy(() => import('components/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const UserPage = lazy(() => import('pages/UserPage'));
// const UserPage = lazy(() => import('pages/UserPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
// const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));

const App = () => {
  // const isLogged = useSelector(getUserToken);

  return (
    <Application>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Suspense fallback={'<p>loading...</p>'}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<PrivateRoutes />}>
              {/* <Route path="user" element={<UserPage />} /> */}
              <Route path="notices" element={<NoticesPage />}>
                {/* <Route path="favorites" element={<NoticesCategoryList favorites />} /> */}
                {/* <Route path="own" element={<NoticesCategoryList own />} /> */}
              </Route>
            </Route>
            <Route path="/" element={<PublicRoutes />}>
              <Route index element={<HomePage />} />
              {/* <Route path="news" element={<NewsPage />} /> */}
              <Route path="notices/:categoryName" element={<NoticesPage />}>
                {/* <Route path="sell" element={<NoticesCategoryList sell />} /> */}
                {/* <Route path="lost" element={<NoticesCategoryList lost />} /> */}
                {/* <Route path="found" element={<NoticesCategoryList found />} /> */}
                {/* <Route path="for-free" element={<NoticesCategoryList for-free />} /> */}
              </Route>
              {/* <Route path="friends" element={<OurFriendsPage />} /> */}
            </Route>
            <Route path="/" element={<PublicRoutes redirectTo="/" restricted />}>
              {/* <Route path="login" element={<LoginPage />} /> */}
              {/* <Route path="register" element={<RegisterPage />} /> */}
            </Route>
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </Application>
  );
};

export default App;
