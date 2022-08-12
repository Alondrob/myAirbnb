import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Feed from "./components/feed/Feed";
import Form from "./components/forms/Form";
import Register from "./components/forms/Register";
import Main from "./pages/Main";
import SignIn from "./components/forms/SignIn";
import Property from "./pages/Property";
const App = () => {
  return (
    <Router>
   
        
      <Routes>
     
        <Route path="/" element={<Main/>}/>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/property/:id" element={<Property/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
