import React from 'react';
import { Bookmark, PlusSquare, Tag, MoreVertical } from 'lucide-react';

const DataTable = ({ data, totalCount }) => {
    const PRIMARY_HEADER_COLOR = "#334155";

    const getDynamicRange = (freq) => {
        if (freq === 'Daily') return '01 Jan 2024 - 31 Jan 2024';
        if (freq === 'Annual') return '2015 - 2023';
        if (freq === 'Monthly') return 'Jun 2022 - May 2024';
        return 'Jan 2011 - Apr 2024';
    };

    const renderCoverageBadges = (item) => {
        const badges = [];
        if (item.sData === 'Y') badges.push({ char: 'S', color: 'bg-red-50 text-red-500 border-red-100' });
        if (item.db === 'IND') badges.push({ char: 'I', color: 'bg-green-50 text-green-600 border-green-100' });
        else if (item.db === 'IMF') badges.push({ char: 'N', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' });
        if (item.freq === 'Daily') badges.push({ char: 'D', color: 'bg-blue-50 text-blue-500 border-blue-100' });
        if (item.freq === 'Monthly') badges.push({ char: 'M', color: 'bg-purple-50 text-purple-500 border-purple-100' });

        return badges.map((b, i) => (
            <span key={i} className={`w-5 h-5 flex items-center justify-center text-[10px] font-normal rounded-sm border ${b.color}`}>
                {b.char}
            </span>
        ));
    };

    if (!data || data.length === 0) return null;

    return (
        <div className="w-full bg-white overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse table-fixed">
                    <thead>
                        <tr className="bg-white border-b border-slate-100">
                            <th className="px-6 py-5 text-[12px] font-bold tracking-tight w-[45%]" style={{ color: PRIMARY_HEADER_COLOR }}>
                                New Releases <span className="text-indigo-500 ml-1">({totalCount})</span>
                            </th>
                            <th className="px-6 py-5 text-[11px] font-bold tracking-wider w-[15%]" style={{ color: PRIMARY_HEADER_COLOR }}>
                                Range
                            </th>
                            <th className="px-6 py-5 text-[11px] font-bold tracking-wider w-[10%]" style={{ color: PRIMARY_HEADER_COLOR }}>
                                Unit
                            </th>
                            <th className="px-6 py-5 text-[11px] font-bold tracking-wider w-[12%]" style={{ color: PRIMARY_HEADER_COLOR }}>
                                Coverage
                            </th>
                            <th className="px-6 py-5 text-[11px] font-bold tracking-wider w-[18%]" style={{ color: PRIMARY_HEADER_COLOR }}>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {data.map((item, index) => (
                            <tr key={item.id || index} className={`group ${index % 2 !== 0 ? 'bg-[#f8faff]' : 'bg-white'} hover:bg-slate-50 transition-colors`}>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col items-start gap-1.5">
                                        <span className="text-[13px] font-semibold text-slate-700 leading-tight">
                                            {item.title}
                                        </span>
                                        <div className="inline-flex bg-[#e0f2fe] text-[#0ea5e9] text-[10.5px] font-normal px-2 py-0.5 rounded-sm tracking-tight">
                                            {item.cat}{item.subCat ? ` / ${item.subCat}` : ''}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col text-slate-500">
                                        <span className="text-[12px] font-normal">{getDynamicRange(item.freq)}</span>
                                        <span className="text-[11px] text-slate-400 font-normal">{item.freq}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-[12px] text-slate-500 font-normal">
                                    {item.unit}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-1">
                                        {renderCoverageBadges(item)}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-5 text-slate-300">
                                        <Bookmark size={16} className="hover:text-indigo-600 cursor-pointer transition-colors" />
                                        <PlusSquare size={16} className="hover:text-indigo-600 cursor-pointer transition-colors" />
                                        <Tag size={16} className="hover:text-indigo-600 cursor-pointer transition-colors" />
                                        <MoreVertical size={16} className="hover:text-slate-600 cursor-pointer transition-colors" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;