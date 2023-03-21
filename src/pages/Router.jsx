import { Outlet, Link } from "react-router-dom";
import React from "react";

export const Router = () => {
    return (
        <>
        <div>
            <ul>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/buttons">Buttons</Link>
                </li>
            </ul>
        </div>
        <Outlet />
        </>
    );
}