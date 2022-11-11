import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';
import HomePage from 'assets';
import NewsPage from '../../pages/NewsPage/NewsPage';


import { Application } from './App.styled';

const App = () => {
  return (
    <Application>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage/>} />
        </Route>
      </Routes>
    </Application>
  );
};

export default App;
