import { useEffect, useState } from "react";
import axios from "axios";
import { Plus, LogOut, LayoutDashboard, FileText, Video, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Dashboard = () => {
    const [content, setContent] = useState([]);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    // Fetch user content on load
    useEffect(() => {
        const fetchContent = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:3000/api/v1/view", {
                    headers: { token } // Your middleware expects 'token' header
                });
                setContent(response.data);
            } catch (e) {
                console.error("Failed to fetch content", e);
            }
        };
        fetchContent();
    }, []);

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-8 h-8 bg-[#bda06d] rounded-lg flex items-center justify-center">
                        <LayoutDashboard className="text-white w-5 h-5" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">Vault</span>
                </div>

                <nav className="flex-1 space-y-2">
                    <SidebarItem icon={<FileText size={20}/>} text="All Notes" active />
                    <SidebarItem icon={<X size={20}/>} text="Twitter / X"/>
                    <SidebarItem icon={<Video size={20}/>} text="Videos" />
                </nav>

                <button 
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                >
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10">
                <header className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold text-slate-900">All Notes</h1>
                    <Button 
                        varient="tertiary" 
                        text="Add Content" 
                        startIcon={<Plus size={20}/>}
                        classExtra="px-6 py-3 rounded-xl shadow-lg shadow-[#bda06d]/20"
                    />
                </header>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.length === 0 ? (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-slate-400">Your brain is empty. Add your first memory!</p>
                        </div>
                    ) : (
                        content.map((item: any) => (
                            <div key={item._id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                {/* Card content will go here */}
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm">{item.description}</p>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

const SidebarItem = ({ icon, text, active = false }: { icon: any, text: string, active?: boolean }) => (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
        active ? "bg-[#bda06d]/10 text-[#bda06d]" : "text-slate-500 hover:bg-slate-100"
    }`}>
        {icon}
        <span className="font-semibold">{text}</span>
    </div>
);

export default Dashboard