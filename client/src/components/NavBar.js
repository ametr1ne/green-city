import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "..";
import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const navigate = useNavigate();
  const { admin } = useContext(Context);

  const logOut = () => {
    admin.setAdmin({});
    admin.setIsAuth(false);
    localStorage.removeItem('token')
  };

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex items-center lg:w-0 lg:flex-1">
            <NavLink className="flex items-center" to={HOME_ROUTE}>
              <img
                className="h-8 sm:h-10"
                src="/logo.png"
              />
              <span className="font-bold uppercase leading-4 ml-3">Зеленый<br/> город</span>
            </NavLink>
          </div>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {admin.isAuth ? (
              <>
                <button
                  onClick={() => navigate(ADMIN_ROUTE)}
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Создать
                </button>
                <button
                  onClick={() => logOut()}
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Выйти
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate(LOGIN_ROUTE)}
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Войти
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default NavBar;
