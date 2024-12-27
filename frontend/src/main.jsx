import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { ToastContainer} from 'react-toastify';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    < ToastContainer />
  </StrictMode>
);
