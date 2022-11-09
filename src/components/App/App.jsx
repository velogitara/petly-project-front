import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';
import HomePage from 'pages/HomePage';

import { Application } from './App.styled';

const App = () => {
  return (
    <Application>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Application>
  );
};

export default App;
