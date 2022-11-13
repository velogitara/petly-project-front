import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';
import HomePage from 'pages/HomePage';
import AuthPage from 'pages/AuthPage/';

import { Application } from './App.styled';

const App = () => {
  return (
    <Application>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<AuthPage />} />
        </Route>
      </Routes>
    </Application>
  );
};

export default App;
