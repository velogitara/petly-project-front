import { Routes, Route } from 'react-router-dom';
// import SharedLayout from 'components/SharedLayout';
import AddPetView from 'components/AddPetView/AddPetView';
import { Application } from './App.styled';

const App = () => {
  return (
    <Application>
      <Routes>
        <Route index element={<AddPetView />} />
      </Routes>
    </Application>
  );
};

export default App;
