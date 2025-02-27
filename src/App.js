import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store"
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <AppRouter />
    <ToastContainer/>
    </BrowserRouter>
    </Provider>
    </>
  )
};

export default App;
