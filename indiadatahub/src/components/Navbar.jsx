import { Search, ChevronDown, LogIn } from 'lucide-react';

const Navbar = ({ isLoginPage }) => {
    return (
        <header className="h-13 bg-[#1e1b4b] text-white flex items-center justify-between px-6 shrink-0 z-50">
            <div className="flex items-center gap-10 flex-1 min-w-0">
                <div className="flex items-center gap-3">
                    <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                        <div className="absolute inset-0 border-2 border-white rounded-full"></div>
                        <div
                            className="absolute -bottom-0.5 -right-0.5 w-2.25 h-[2.2px] bg-white rotate-45 rounded-full"
                        ></div>
                    </div>
                    <div className="flex flex-col -space-y-1">
                        <span className="text-[17px] font-bold tracking-tight leading-tight">
                            IndiaDataHub
                        </span>
                        <span className="text-[8.5px] text-white/50 font-light tracking-wide">
                            Data Catalogue & Analytics Dashboard
                        </span>
                    </div>
                </div>
                <div className="relative w-full max-w-xl">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-white text-slate-800 text-[13px] py-1.5 pl-10 pr-4 rounded-sm outline-none"
                    />
                </div>
            </div>
            <div className="flex items-center gap-6 text-[11px] font-bold text-indigo-100">
                <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                    <span>Database</span>
                    <ChevronDown size={12} />
                </div>
                <div className="cursor-pointer hover:text-white transition-colors">
                    <span>Calender</span>
                </div>
                <div className="cursor-pointer hover:text-white transition-colors">
                    <span>Help</span>
                </div>
                {isLoginPage ? (
                    <div className="flex items-center gap-1.5 cursor-pointer text-white border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition-all ml-2">
                        <LogIn size={14} />
                        <span className="font-bold">Login</span>
                    </div>
                ) : (
                    <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden flex items-center justify-center ml-2 cursor-pointer hover:border-white/40 transition-colors bg-indigo-900">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Scooter"
                            alt="User Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;