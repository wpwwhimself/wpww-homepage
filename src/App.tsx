import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from './pages/Layout';
import { Muzyk } from './pages/Muzyk';
import { Programista, ReadSomeMore } from './pages/Programista';
import { Inne } from './pages/Inne';
import { Intro, TBAPage } from './components/Sections';
import { Tarot } from './pages/tarot';
import { Hydrophilia } from './pages/hydrophilia';
import ScrollToTop from './components/ScrollToTop';

export const routes = [
  {
    name: "Intro",
    icon: "house-chimney",
    link: "/",
    component: <Intro />,
  },
  {
    name: "Programista",
    icon: "keyboard",
    link: "/programmer",
    component: <Programista />,
  },
  ...["Foram", "Questy", "Promodruk"].map(company => { return {
    name: company,
    icon: `!${company.toLocaleLowerCase()}`,
    link: `/programmer/${company.toLocaleLowerCase()}`,
    component: <ReadSomeMore code={company.toLocaleLowerCase()} />,
  }}),
  {
    name: "Muzyk",
    icon: "music",
    link: "/musician",
    component: <Muzyk />,
  },
  {
    name: "Inne",
    icon: "ellipsis",
    link: "/others",
    component: <Inne />,
  },
  {
    name: "Tarot",
    icon: "diamond",
    link: "/others/tarot",
    component: <Tarot />,
  },
  {
    name: "Hydrophilia",
    icon: "!hydrophilia",
    link: "/musician/hydrophilia",
    component: <Hydrophilia />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          {routes.map((route, i) =>
            <Route key={i}
              index={route.name === "Intro"}
              path={route.link.substring(1)}
              element={route.component}
              />)}
          <Route path="*" element={<TBAPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
