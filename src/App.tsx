import { Route, Routes } from "react-router-dom";
import { aboutRoute, mainRoute, personRoute } from "./utils/const";
import { AboutPage, MainPage, PersonPage } from "./pages";
import { Header } from "./components";

const App = () => {
  return (
    <div>
        <Header />
        <Routes>
          <Route path={mainRoute} element={<MainPage />} />
          <Route path={aboutRoute} element={<AboutPage />} />
          <Route path={personRoute} element={<PersonPage />} />
        </Routes>
    </div>
  );
};

export default App;
