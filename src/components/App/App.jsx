import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Application } from './App.styled';
import PrivateRoutes from 'components/PrivateRoutes';
import PublicRoutes from 'components/PublicRoutes';

const SharedLayout = lazy(() => import('components/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage'));

const App = () => {
  return (
    <Application>
      <Suspense fallback={'<p>loading...</p>'}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/" element={<PrivateRoutes />}></Route>
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
