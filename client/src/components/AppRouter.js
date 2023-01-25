import React, { useContext } from "react"
import {Route, Routes} from 'react-router-dom'
import { Context } from ".."
import Home from "../pages/Home"
import { authRoutes, publicRoutes } from "../routes"

const AppRouter = () => {
    const {admin} = useContext(Context)
    return (
        <Routes>
            {admin.isAuth && authRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component/>} exact></Route>
            ))}
            {publicRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component/>} exact></Route>
            ))}
            <Route path="*" element={<Home/>} exact></Route>
        </Routes>
    )
}

export default AppRouter