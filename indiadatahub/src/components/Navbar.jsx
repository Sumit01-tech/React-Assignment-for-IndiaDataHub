import { Search, ChevronDown, Database, LogIn } from 'lucide-react';

const Navbar = ({ isLoginPage }) => {
    return (
        <header className="h-13 bg-[#1e1b4b] text-white flex items-center justify-between px-6 shrink-0 z-50">
            <div className="flex items-center gap-10 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-indigo-500 rounded flex items-center justify-center">
                        <Database className="text-white w-4 h-4" />
                    </div>
                    <span className="text-lg font-bold italic">IndiaDataHub</span>
                </div>
                <div className="relative w-full max-w-xl">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search for indicators..."
                        className="w-full bg-white text-slate-800 text-xs py-2 pl-10 pr-4 rounded-sm outline-none"
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
                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] border border-indigo-400 font-bold shrink-0 ml-2 uppercase">
                        JD
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;