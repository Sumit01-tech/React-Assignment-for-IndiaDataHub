import { useState, useRef, useEffect } from 'react';
import {
    ChevronLeft,
    ChevronDown,
    ChevronRight,
    LayoutGrid
} from 'lucide-react';

const Sidebar = ({ categories = [], activeSource, setActiveSource }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const categoriesWithCubicIcon = ['External Sector', 'Foreign Trade', 'Telecom & Internet'];

    return (
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 h-full">
            {/* Header */}
            <div className="h-13 px-4 flex items-center gap-3 border-b border-slate-100 shrink-0">
                <ChevronLeft size={18} className="text-slate-500 cursor-pointer hover:text-indigo-600 transition-colors" />
                <span className="font-bold text-slate-800 text-[14px]">Economic Monitor</span>
            </div>
            <div className="p-3">
                <div className="bg-[#e0e7ff] rounded-md p-4 border-[0.5px] border-indigo-200 shadow-sm">
                    <h3 className="text-[12px] font-medium text-slate-500 mb-1">
                        Category
                    </h3>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full text-black text-[12px] font-medium py-1 flex items-center justify-between hover:opacity-70 transition-opacity"
                        >
                            {activeSource === 'India' ? 'India & States' : 'IMF World Outlook'}
                            <ChevronDown size={14} className="text-black stroke-[3px]" />
                        </button>

                        {isOpen && (
                            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-slate-200 rounded shadow-xl py-1 z-50">
                                <button
                                    onClick={() => { setActiveSource('India'); setIsOpen(false); }}
                                    className="w-full text-left px-4 py-2 text-[12px] hover:bg-slate-50 text-slate-700"
                                >
                                    India & States
                                </button>
                                <button
                                    onClick={() => { setActiveSource('IMF'); setIsOpen(false); }}
                                    className="w-full text-left px-4 py-2 text-[12px] hover:bg-slate-50 text-slate-700"
                                >
                                    IMF World Outlook
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="px-3 pb-4 flex-1 overflow-y-auto custom-scrollbar">
                <div className="border-[0.5px] border-indigo-200 rounded-md bg-[#f8faff] shadow-sm overflow-hidden">
                    <div className="p-2 border-b-[0.5px] border-indigo-100">
                        <div className="border-[0.5px] border-indigo-200 rounded-sm bg-white hover:bg-indigo-50 transition-all cursor-pointer">
                            <div className="flex items-center px-3 py-2.5 text-slate-700">
                                <span className="text-[12px] font-bold">Homepage</span>
                            </div>
                        </div>
                    </div>
                    {/* Categories List */}
                    <div className="flex flex-col">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className={`group flex items-center justify-between px-5 py-2.5 hover:bg-indigo-50/50 text-slate-600 hover:text-slate-900 cursor-pointer transition-all ${index !== categories.length - 1 ? 'border-b-[0.5px] border-indigo-50' : ''
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <ChevronRight
                                        size={12}
                                        className="text-slate-500 stroke-[3px] group-hover:text-indigo-600"
                                    />
                                    <span className="text-[12px] font-medium tracking-tight">{category}</span>
                                </div>

                                {categoriesWithCubicIcon.includes(category) && (
                                    <LayoutGrid
                                        size={14}
                                        className="text-slate-500 stroke-[2.5px] group-hover:text-indigo-500"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;