import logo from './assets/logo.svg';
import './App.css';
import Header from "./components/Header";
import Profile from "./pages/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header logo={logo} />
          <Routes>
              <Route
                  path='/'
                  element={<Profile userName='meloryayala' />}
              />
              <Route
                  path='/projects'
                  element={<Projects userName='meloryayala' />}
              />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
