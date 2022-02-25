import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `home`;
    navigate(path);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-orange">
      <form className="p-10 mx-5 bg-white rounded flex justify-center items-center flex-col shadow-lg z-10">
        <img src="RIT_rgb_hor_k.png" className="mb-3" width={500} />
        <h1 className="font-bold text-2xl mb-5">CAGE INVENTORY</h1>
        <input
          type="email"
          name="email"
          class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
          autocomplete="off"
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none "
          autocomplete="off"
          placeholder="Password"
          required
        />
        <button
          class="bg-green-600 hover:bg-green-900 text-white font-bold p-2 rounded w-32 mb-3"
          id="login"
          type="submit"
          onClick={routeChange}
        >
          <span>Login</span>
        </button>
        <a href="/" className="text-sm text-gray-400 hover:text-green-600">
          Forgot password?
        </a>
      </form>
      <div className="absolute top-24 -left-80">
        <img src="tigerLogo.png" width="1000" />
      </div>
    </div>
  );
}
