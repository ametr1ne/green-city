import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../http/adminAPI";
import { HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import {observer} from 'mobx-react-lite'

const Auth = observer(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {admin} = useContext(Context)

  const location = useLocation();
  const navigate = useNavigate()

  const isLogin = location.pathname === LOGIN_ROUTE;

  const onClick = async () => {
    try {
        let data;
        if (isLogin) {
          data = await login(email, password);
        } else {
          data = await registration(email, password);
        }
        admin.setAdmin(admin)
        admin.setIsAuth(true)
        navigate(HOME_ROUTE)
    } catch(e) {
        alert(e.response.data.message)
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          {isLogin ? (
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Log in to your account
            </h2>
          ) : (
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Register new account
            </h2>
          )}
        </div>
        <form className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={onClick}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isLogin ? "Login" : "Registration"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Auth;
