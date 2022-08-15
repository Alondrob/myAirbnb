import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/header/Header";
import Feed from "./components/feed/Feed";
import Form from "./pages/auth-pages/Form";
import Register from "./pages/auth-pages/Register";
import Main from "./pages/main-pages/Main";
import SignIn from "./pages/auth-pages/SignIn";
import Property from "./pages/misc-pages/Property";
import HostYourHome from "./pages/misc-pages/HostYourHome";
import Help from "./pages/misc-pages/Help";
const App = () => {
  return (
    <Router>
   
        
      <Routes>
     
        <Route path="/" element={<Main/>}/>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/host_your_home" element={<HostYourHome />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/property/:id" element={<Property/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
