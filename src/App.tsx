import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ ...route }, index) => (
          <Route {...route} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
