import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from './pages/Layout';
import { Muzyk } from './components/Muzyk';
import { Programista } from './components/Programista';
import { Inne } from './components/Inne';
import { Intro, TBAPage } from './components/Sections';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Intro />} />
          <Route path="programmer" element={<Programista />} />
          <Route path="musician" element={<Muzyk />} />
          <Route path="others" element={<Inne />} />
          <Route path="*" element={<TBAPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
