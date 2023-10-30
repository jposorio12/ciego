import {
  Route,
  Routes as Switch,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import useViews from "../../Views";
import PrivateRoute from "../PrivateRoute";
import useWrappers from "../../Wrappers";

const Router = () => {
  const { useScreens } = useViews();
  const { Login, Offline, Count, Search, CountDetail, CountDetailId } =
    useScreens();
  const { ScrollTop } = useWrappers();

  return (
    <BrowserRouter>
      <ScrollTop>
        <Switch>
          <Route path="/" element={<Login />} />
          <Route path="/offline" element={<Offline />} />
          {/* <Route path="/count" element={<PrivateRoute />}> */}
          <Route path="/count" element={<Count />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail" element={<CountDetail />} />
          <Route path="/detail/:id" element={<CountDetailId />} />
          {/* </Route> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Switch>
      </ScrollTop>
    </BrowserRouter>
  );
};

export default Router;
