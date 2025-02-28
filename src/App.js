import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store"
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
    <BrowserRouter>
    <AppRouter />
    <ToastContainer/>
    </BrowserRouter>
    </PersistGate>
    </Provider>
    </>
  )
};

export default App;
