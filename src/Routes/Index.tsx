import Login from "@/pages/Auth/Login/Index";
import Register from "@/pages/Auth/Register/Index";
import Home from "@/pages/Home/Index";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
    { path: "/", element: <Navigate to='login' /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <Home /> },
], {
    basename: "/",
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
    },
});