import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar(){

    return (
        <div className="w-64 h-screen border-r border-gray-800 bg-slate-900 dark:bg-black dark:text-white">
            <div className="flex">
                <img className="w-10 h-12 pt-5 pl-3" src="/images/money.png" />
                <h1 className="font-semibold text-2xl px-3 py-4 text-white dark:text-white">Finance Tracker</h1>
            </div>
            <hr />
            <div>
                <ul className="px-14 py-6 text-xl">
                    <li className="text-white dark:text-white flex space-x-2 pb-4">
                        <img src="https://www.svgrepo.com/show/491056/overview.svg" className="w-7 h-7" />
                        <NavLink to="/dashboard/overview">Overview</NavLink>
                    </li>

                    <li className="text-white dark:text-white flex space-x-2 pb-4">
                        <img src="https://www.svgrepo.com/show/521894/transactions.svg" className="w-7 h-7" />
                        <NavLink to="/dashboard/transactions">Transactions</NavLink>
                    </li>

                    <li className="text-white dark:text-white flex space-x-2 pb-4">
                        <img src="https://www.svgrepo.com/show/532363/user-alt-1.svg" className="w-7 h-7" />
                        <NavLink to="/dashboard/users">Users</NavLink>
                    </li>

                    <li className="text-white dark:text-white flex pb-4 space-x-2">
                        <img src="https://www.svgrepo.com/show/501807/analytics.svg" className="w-7 h-7" />
                        <NavLink to="/dashboard/analytics">Analytics</NavLink>
                    </li>

                    <li className="text-white dark:text-white flex space-x-2">
                        <img className="w-7 h-7" src="https://www.svgrepo.com/show/500685/setting.svg" />
                        <NavLink to="/dashboard/settings">Setting</NavLink>
                    </li>
                    
                </ul>
            
            </div>
                
        </div>
    )
}