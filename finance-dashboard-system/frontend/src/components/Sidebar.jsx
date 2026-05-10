import React from "react";


export default function Sidebar(){

    return (
        <div className="w-64 h-screen bg-slate-900">
            <div className="flex">
                <img className="w-10 h-12 pt-5 pl-3" src="/images/money.png" />
                <h1 className="font-semibold text-2xl px-3 py-4 text-white">Finance Tracker</h1>
            </div>
            <hr />
            <div>
                <ul className="px-14 py-6 text-xl">
                    <li className="text-white flex space-x-2 pb-4">
                        <img src="https://www.svgrepo.com/show/491056/overview.svg" className="w-7 h-7" />
                        <a href="" className="">Overview</a>
                    </li>

                    <li className="text-white flex space-x-2 pb-4">
                        <img src="https://www.svgrepo.com/show/521894/transactions.svg" className="w-7 h-7" />
                        <a href="" className="">Transactions</a>
                    </li>

                    <li className="text-white flex space-x-2 pb-4">
                        <img src="https://www.svgrepo.com/show/532363/user-alt-1.svg" className="w-7 h-7" />
                        <a href="" className="">Users</a>
                    </li>

                    <li className="text-white flex pb-4 space-x-2">
                        <img src="https://www.svgrepo.com/show/501807/analytics.svg" className="w-7 h-7" />
                        <a href="" className="">Analytics</a>
                    </li>

                    <li className="text-white flex space-x-2">
                        <img className="w-7 h-7" src="https://www.svgrepo.com/show/500685/setting.svg" />
                        <a href="" className="">Settings</a>
                    </li>
                    
                </ul>
            
            </div>
                
        </div>
    )
}