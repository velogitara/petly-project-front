import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { useSelector } from 'react-redux';
// import { selectAuthToken } from 'redux/authState';
import { ToastContainer } from 'react-toastify';
import PrivateRoutes from 'components/PrivateRoutes';
import PublicRoutes from 'components/PublicRoutes.jsx';
import { Application } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = lazy(() => import('components/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage/'));
const AuthPage = lazy(() => import('pages/AuthPage/'));
// const UserPage = lazy(() => import('pages/UserPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
const NewsPage = lazy(() => import('pages/NewsPage/'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));

const App = () => {
  // const isLogged = useSelector(selectAuthToken);

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
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<PrivateRoutes />}>
              {/* <Route path="user" element={<UserPage />} /> */}
              <Route path="notices/" element={<NoticesPage />}>
                <Route path="favorite" exact element={<NoticesPage />} />
                <Route path="own" exact element={<NoticesPage own />} />
              </Route>
            </Route>
            <Route path="/" element={<PublicRoutes />}>
              <Route index element={<HomePage />} />

              <Route path="news" element={<NewsPage />} />
              <Route path="notices/:categoryName" element={<NoticesPage />}></Route>
              <Route path="friends" element={<OurFriendsPage />} />
            </Route>
            <Route path="/" element={<PublicRoutes redirectTo="/" restricted />}>
              <Route path="login" element={<AuthPage />} />
              <Route path="register" element={<AuthPage />} />
            </Route>
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </Application>
  );
};

export default App;
