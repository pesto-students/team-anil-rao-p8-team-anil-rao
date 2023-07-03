import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import HomeScreen from './Pages/HomeScreen';
import SignUpScreen from './Pages/SignUpScreen';
import LoginScreen from './Pages/LoginScreen';
import LandingScreen from './Pages/LandingScreen';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/homescreen" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
