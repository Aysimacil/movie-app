import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store"

const App = () => {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <AppRouter />
    </BrowserRouter>
    </Provider>
    </>
  )
};

export default App;
