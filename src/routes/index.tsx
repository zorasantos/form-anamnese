import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../pages/auth';
import Form from '../pages/form';

const AppRoutes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
