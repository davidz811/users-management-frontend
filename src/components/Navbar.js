import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate('/addUser');
    }

    return (
        <div className="w-full h-30m flex justify-between bg-blue-300 items-center">
            <Link to={"/"}>
                <div className="py-3 ml-2 text-xl">
                    User Management Application
                </div>
            </Link>
            <div className="py-3 mr-2">
                <button className="border border-blue-500 rounded px-4 py-2" onClick={handleNavigate}>
                    Add User
                </button>
            </div>
        </div>
    )
}

export default Navbar