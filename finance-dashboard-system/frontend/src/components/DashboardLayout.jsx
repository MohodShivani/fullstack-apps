import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


export default function DashboardLayout() {
    return (
        <div className="flex h-screen">

            {/* Sidebar */}
            <div className="w-64 bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-800">
                <Sidebar />
            </div>

            {/* Right Side */}
            <div className="flex-1 flex flex-col">

                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <div className="flex-1 p-6 dark:bg-black overflow-y-auto">
                    <Outlet />
                </div>

            </div>

        </div>
    );
}
