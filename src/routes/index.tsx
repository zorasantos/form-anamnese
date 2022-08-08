import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Editor from '../pages/editor';
import Preview from '../pages/preview';

const AppRoutes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Editor />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
