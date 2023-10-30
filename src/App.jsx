import useRoutes from "./Routes";
import { store, persistor } from "./Redux/Store";
import GetGlobalHoc from "./Hocs/GlobalHoc";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const { Router } = useRoutes();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GetGlobalHoc>
          <Router />
        </GetGlobalHoc>
      </PersistGate>
    </Provider>
  );
};

export default App;
