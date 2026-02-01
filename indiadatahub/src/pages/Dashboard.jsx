import { useState, useMemo, useEffect } from 'react';
import response1 from '../data/response1.json';
import response2 from '../data/response2.json';
import Sidebar from '../components/Sidebar';
import DataTable from '../components/DataTable';
import Pagination from '../components/Pagination';
import Navbar from '../components/Navbar';
import {
    Search, Bookmark, Filter, Grid, Share2, LineChart
} from 'lucide-react';

const Dashboard = () => {
    const [activeSource, setActiveSource] = useState('India');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const processedData = useMemo(() => {
        const sourceData = activeSource === 'India' ? response1 : response2;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        return {
            categories: sourceData.categories,
            tableRows: sourceData.frequent.slice(startIndex, endIndex),
            totalCount: sourceData.frequent.length
        };
    }, [activeSource, currentPage]);

    useEffect(() => { setCurrentPage(1); }, [activeSource]);

    return (
        <div className="flex flex-col h-screen bg-white overflow-hidden font-sans">

            <Navbar isLoginPage={false} />

            <div className="flex flex-1 overflow-hidden">
                <Sidebar
                    categories={processedData.categories}
                    activeSource={activeSource}
                    setActiveSource={setActiveSource}
                />

                <main className="flex-1 overflow-y-auto bg-[#f8faff] p-6">
                    <div className="flex justify-end items-center gap-2 mb-4">
                        <div className="bg-white p-2 rounded border border-indigo-100 shadow-sm flex items-center justify-center hover:bg-slate-50 cursor-pointer">
                            <Search size={15} className="text-slate-500" />
                        </div>
                        <div className="bg-white p-2 rounded border border-indigo-100 shadow-sm flex items-center justify-center hover:bg-slate-50 cursor-pointer">
                            <Bookmark size={15} className="text-slate-500" />
                        </div>
                        <div className="bg-white p-2 rounded border border-indigo-100 shadow-sm flex items-center justify-center hover:bg-slate-50 cursor-pointer">
                            <Filter size={15} className="text-slate-500" />
                        </div>
                        <div className="bg-white px-3 py-2 rounded border border-indigo-100 shadow-sm flex items-center justify-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase whitespace-nowrap">
                                Selected (0)
                            </span>
                        </div>
                        <div className="bg-white p-2 rounded border border-indigo-100 shadow-sm flex items-center justify-center hover:bg-slate-50 cursor-pointer">
                            <Grid size={15} className="text-slate-500" />
                        </div>
                        <div className="bg-white p-2 rounded border border-indigo-100 shadow-sm flex items-center justify-center hover:bg-slate-50 cursor-pointer">
                            <Share2 size={15} className="text-slate-500" />
                        </div>
                        <button className="bg-[#1e1b4b] text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded flex items-center gap-2 hover:bg-black transition-all shadow-md ml-1">
                            <LineChart size={14} className="stroke-[3px]" />
                            View Graph
                        </button>
                    </div>

                    <div className="bg-white rounded-md shadow-sm border border-slate-200 overflow-hidden">
                        <DataTable
                            data={processedData.tableRows}
                            totalCount={processedData.totalCount}
                        />
                    </div>

                    <div className="mt-6 flex justify-center pb-8">
                        <Pagination
                            totalItems={processedData.totalCount}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;