import {
  Route,
  Routes as Switch,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import useViews from "../../Views";
import PrivateRoute from "../PrivateRoute";

const Router = () => {
  const { useScreens } = useViews();
  const { Login, Offline, Count, Search, CountDetail } = useScreens();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Login />} />
        <Route path="/offline" element={<Offline />} />
        {/* <Route path="/count" element={<PrivateRoute />}> */}
        <Route path="/count" element={<Count />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<CountDetail />} />
        {/* </Route> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
