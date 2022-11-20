import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";
import Backdrop from "./components/Backdrop";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpScreen from "./components/SignUpScreen";
import Footer from "./components/Footer";
import Theme from "./components/Theme";
import { selectTheme } from "./features/theme/themeSlice";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const user = useSelector(selectUser);
  const theme = useSelector(selectTheme);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <Router>
      {!user ? (
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUpScreen />}></Route>
        </Routes>
      ) : (
        <div className={theme === "blue-white" ? `body-${theme}` : ""}>
          <Header />
          <Backdrop />
          <Sidebar />
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/aboutus" element={<Aboutus />}></Route>
          </Routes>
          <Theme />
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
