import { useState } from "react";
import Header from "../../components/header/Header";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    passConfirm: "",
  });
    
    const submitRegistration = () => {
           if(formData.password === formData. passConfirm) {
        console.log('before test')
        console.log('after test')
        
        
        
      }
      else {
        alert("Password doesn't match!")
      }
     console.log("formData",formData)

    }
  return (
    <div className=" h-screen bg-vacation-pattern">
      <Header />

      <div className="flex justify-center mt-8 mb-6">
        <input
          className=" block text-center italic  hover:bg-red-200 font-bold rounded-full border-2 border-sky-900 w-80 h-12 space-y-4"
          placeholder="Name..."
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
          value={formData.userName}
        />
      </div>
      {/* ****************************** */}
      <div className="flex justify-center mt-4 mb-6">
        <input
          className=" block text-center italic  hover:bg-red-200 font-bold rounded-full border-2 border-sky-900 w-80 h-12 space-y-4"
          placeholder="Email..."
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
      </div>
      {/* ****************************** */}
      <div className="flex justify-center mt-4 mb-6">
        <input
          className=" block text-center italic  hover:bg-red-200 font-bold rounded-full border-2 border-sky-900 w-80 h-12 space-y-4"
          placeholder="Password..."
          type="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          value={formData.password}
        />
      </div>
      {/* ****************************** */}
      <div className="flex justify-center mt-4 mb-4">
        <input
          className=" block text-center italic  hover:bg-red-200 font-bold rounded-full border-2 border-sky-900 w-80 h-12 space-y-4"
          placeholder="Confirm Password..."
          type="password"
          onChange={(e) =>
            setFormData({ ...formData, passConfirm: e.target.value })
          }
          value={formData.passConfirm}
        />
      </div>
      {/* ****************************** */}
      <div className=" flex justify-center mt-10 mb-4">
        <button
          className="block  font-extrabold italic text-center rounded-full h-16 w-80 border-6 border-blue-300 bg-gray-500 hover:bg-green-100"
          onClick={submitRegistration}
        >
          Sign-Up
        </button>
      </div>
    </div>
  );
};

export default Register;
