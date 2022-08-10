import Header from "../header/Header";

const Register = () => {
  return (
    <div className=" h-screen bg-vacation-pattern">
      <Header />

      <div className="flex justify-center mt-8 mb-6">
        <input
          className=" block text-center italic  hover:bg-red-200 font-bold rounded-full border-2 border-sky-900 w-80 h-12 space-y-4"
          placeholder="Name..."
          type="text"
          value={null}
        />
      </div>
      {/* ****************************** */}
      <div className="flex justify-center mt-4 mb-6">
        <input
          className=" block text-center italic  hover:bg-red-200 font-bold rounded-full border-2 border-sky-900 w-80 h-12 space-y-4"
          placeholder="Email..."
          type="email"
          value={null}
        />
      </div>
      {/* ****************************** */}
      <div className="flex justify-center mt-4 mb-6">
        <input
          className=" block text-center italic  hover:bg-red-200 font-bold rounded-full border-2 border-sky-900 w-80 h-12 space-y-4"
          placeholder="Password..."
          type="password"
          value={null}
        />
      </div>
      {/* ****************************** */}
      <div className="flex justify-center mt-4 mb-4">
        <input
          className=" block text-center italic  hover:bg-red-200 font-bold rounded-full border-2 border-sky-900 w-80 h-12 space-y-4"
          placeholder="Confirm Password..."
          type="password"
          value={null}
        />
      </div>
      {/* ****************************** */}
      <div className=" flex justify-center mt-10 mb-4">
        <button className="block  font-extrabold italic text-center rounded-full h-16 w-80 border-6 border-blue-300 bg-gray-500 hover:bg-green-100">
          Sign-Up
        </button>
      </div>
    </div>
  );
};

export default Register;
