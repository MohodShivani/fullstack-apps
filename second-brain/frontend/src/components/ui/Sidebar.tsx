import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItems";
import { Logo } from "../../icons/Logo"

interface SidebarProps {
    filter: string;
    setFilter: (value: string) => void;
}

export function Sidebar({ filter, setFilter }: SidebarProps) {
    return (
        <div className="h-screen bg-slate-900 text-white border-r w-72 fixed left-0 top-0 pl-6">

            <div className="flex text-2xl pt-8 items-center">
                <div className="pr-2 text-white">
                    <Logo />
                </div>
                Brainly
            </div>

            <div className="pt-8 pl-4 space-y-2">

                {/* ✅ ALL */}
                <SidebarItem 
                    text="All" 
                    active={filter === "all"}
                    onClick={() => setFilter("all")}
                />

                {/* ✅ YouTube */}
                <SidebarItem 
                    text="Youtube" 
                    icon={<YoutubeIcon />} 
                    active={filter === "youtube"}
                    onClick={() => setFilter("youtube")}
                />

                {/* ✅ Twitter */}
                <SidebarItem 
                    text="Twitter" 
                    icon={<TwitterIcon />} 
                    active={filter === "twitter"}
                    onClick={() => setFilter("twitter")}
                />

            </div>
        </div>
    );
}