import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Feed from "./components/feed/Feed";
import Form from "./components/forms/Form";
import Register from "./components/auth/Register";
const App = () => {
  return (
    <Router>
   <Header />
        <Feed />
      <Routes>
     

        <Route path="/form" element={<Form />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
