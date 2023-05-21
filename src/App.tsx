import React from 'react';
import { Route, Routes } from "react-router-dom";
import { aboutRoute, mainRoute, personRoute } from "./utils/const";
import { AboutPage, MainPage, PersonPage } from "./pages";
import { Header } from "./components";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/normalize.css";
import { useAppDispatch } from './redux/hooks';
import { setAsyncPosts } from './redux/actions/postAction';

const App = () => {
  const dispatch = useAppDispatch();
  
  React.useEffect(() => {
    dispatch(setAsyncPosts());
  },[])

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
