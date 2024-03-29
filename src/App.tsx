import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './styles/App.css'
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import { Provider } from "react-redux";
import { userStore } from "./store/UserStore";

function App() {
  return (
    <Provider store={userStore}>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
