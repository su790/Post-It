"use client";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <li className="list-none">
      <button
        onClick={() => signIn('google')}
        className=" bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25 text-sm"
      >
        Sign In
      </button>
    </li>
  );
}

export default Login;
