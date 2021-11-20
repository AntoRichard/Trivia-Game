import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { routes } from "./routes";
import { appRoutes } from "./routes/routeConstants/appRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ ...route }, index) => (
          <Route {...route} key={index} />
        ))}
        <Route path="*" element={<Navigate replace to={appRoutes.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
