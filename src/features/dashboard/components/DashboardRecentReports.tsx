
interface QuestionReport {
    id: string;
    reporter: { name: string; avatar: string };
    category: string;
    categoryColor: string;
    date: string;
    status: 'Pending' | 'Resolved' | 'Rejected';
    statusColor: string;
}

const reports: QuestionReport[] = [
    {
        id: "#Q-8832",
        reporter: { name: "Sarah M.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB31ueOvP4-4BT6PhjyxuuZweChRdQ-l1gTYQoF_xCGZSUhuwC6PJZvtMFlm5ykXauNLMPvxhre7BsMGjNJYo82iHROm-XPJyYOROZCEPFeSusLG2dSEf88_J39UUDyoPasaYhISk-E0vPEmIDInggtCjE_sT3GPaeoZOU5jjeaWO91crS-rxpaNBbowBunSh8SxT0WdvnmlKCFRqH58LrE7nF9eXCTfyxFv8JqMLqpj61F8iDnf2BJjU0JZXboqZmQIO8KfAH-zCYM" },
        category: "Physics",
        categoryColor: "bg-blue-100 text-blue-800",
        date: "Oct 24, 2023",
        status: "Pending",
        statusColor: "bg-orange-100 text-orange-800 border-orange-200"
    },
    {
        id: "#Q-8831",
        reporter: { name: "David K.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsIE0JDmU2xH2R7sPiNYYvVyjtVlgTGD1VdJ71h7_xhdWWoo7tFIMQWZvQEf9fYnTqxWZ7g5oiHkxZmpKU2VG0qKMXlPn07BXMbjRNkoOv2WgbB8bYgmRyltD-ivi5orTZTtcmNDwwJqv2iDVxZrLiS0dwZUWw_dExtCmqDF-yAzBUcsh4THW-Dwp_AXQtPXUpW4FZ5HhXxv2gS69FVMOZPP8eIJZ9Xr6fDuPn2CM5X2Ndh1rVYeaNJe6iLjFnux5RXeHg-CmU7dXf" },
        category: "History",
        categoryColor: "bg-purple-100 text-purple-800",
        date: "Oct 24, 2023",
        status: "Resolved",
        statusColor: "bg-green-100 text-green-800 border-green-200"
    },
    {
        id: "#Q-8830",
        reporter: { name: "Emily R.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWXIM1mnTZZyq9K4D8wNz0U_SOUyLUCEAU59v4d0CaPEIQAZ5HChcV8_rKWSZmIq_YJ7c5iDc42g8pt_Ao0z9zhK3GBxWxOXdIZa0-4f78xJPnVz4O6KioRIQLTvpmHMydqRKCwRR6mgQVZ-ItJxVnJs0SIFskgbD8aUl4UoYm6o52zfn5Aykfws9VN8ZIh62OMuHQMKAj--uj6E_cjVPLLlwVRJ4M2E1PUB_otwrNlEdXqvltnWxMxInAbF8ra2H2E997Z1D62hhR" },
        category: "Mathematics",
        categoryColor: "bg-yellow-100 text-yellow-800",
        date: "Oct 23, 2023",
        status: "Resolved",
        statusColor: "bg-green-100 text-green-800 border-green-200"
    },
    {
        id: "#Q-8829",
        reporter: { name: "Michael T.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJsrcYvQrPTWoBH0C_IbIAZiiD_5pzM8ed5msxO97wE0iE7z7lI29FTI8gyDy-8IR5ztGZI8y5Sk1gvzAHsTxPug1V4e_umGlIZvjhhIaz2XdJ0lqDySsu2H6e13CdGygqz9GT9kLp51Xlg-_GQolsUyNkmnaXaMrFHkzva5nF1Gb7W-xhCI1PQrA9rud40BPxA9-_ArlvH_WP4oqBeffVUM97F-tFoymawH0z7nSFXnnuUF9lkOfnqhGxX5lPHXxY3Uy4BYDX3sYy" },
        category: "Chemistry",
        categoryColor: "bg-blue-100 text-blue-800",
        date: "Oct 23, 2023",
        status: "Pending",
        statusColor: "bg-orange-100 text-orange-800 border-orange-200"
    }
];

export const DashboardRecentReports = () => {
    return (
        <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Recent Reported Questions</h3>
                    <p className="text-sm text-gray-500 mt-1">Questions flagged by students for review.</p>
                </div>
                <button className="text-sm font-medium text-primary hover:text-primary-dark hover:underline cursor-pointer">View All</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                            <th className="px-6 py-4">Question ID</th>
                            <th className="px-6 py-4">Reporter</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {reports.map((report) => (
                            <tr key={report.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="px-6 py-4 font-mono text-gray-600">{report.id}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div 
                                            className="size-8 rounded-full bg-gray-200 bg-cover bg-center" 
                                            style={{backgroundImage: `url("${report.reporter.avatar}")`}}
                                        ></div>
                                        <span className="font-medium text-gray-900">{report.reporter.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${report.categoryColor}`}>
                                        {report.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500">{report.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${report.statusColor}`}>
                                        <span className={`size-1.5 rounded-full ${report.status === 'Pending' ? 'bg-orange-600' : report.status === 'Resolved' ? 'bg-green-600' : 'bg-red-600'}`}></span>
                                        {report.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
