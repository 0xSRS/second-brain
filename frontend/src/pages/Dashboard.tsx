import { useEffect, useState } from "react";
import axios from "axios";
import { Plus, LogOut, LayoutDashboard, FileText, Video, X, Trash2, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { CreateContentModal } from "../components/CreateContentModal";

const Dashboard = () => {
    const [content, setContent] = useState([]);
    const [filter, setFilter] = useState("all"); // State for filtering
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const fetchContent = async () => {
        try {
            const token = localStorage.getItem("token");
            // Ensure the path includes /api/content/
            const response = await axios.get("http://localhost:3000/api/content/v1/view", {
                headers: { token }
            });

            setContent(response.data);
        } catch (e) {
            console.error("Error fetching content:", e);
        }
    };

    const deleteContent = async (contentId: string) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete("http://localhost:3000/api/content/v1/delete", {
                headers: { token },
                data: { contentId } // Sending ID in body as per your backend
            });
            fetchContent(); // Refresh list after deletion
        } catch (e) {
            alert("Could not delete item");
        }
    };

    useEffect(() => {
        fetchContent();
    }, []);

    // Logic for filtering the display list
    const filteredContent = content.filter((item: any) =>
        filter === "all" ? true : item.type === filter
    );

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="flex min-h-screen bg-slate-50">
            <CreateContentModal
                open={modalOpen}
                onClose={() => { setModalOpen(false); fetchContent(); }}
            />

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col fixed h-full shadow-sm">
                <div className="flex items-center gap-3 mb-10 px-2">
                    <div className="w-9 h-9 bg-[#bda06d] rounded-xl flex items-center justify-center shadow-lg shadow-[#bda06d]/30">
                        <LayoutDashboard className="text-white w-5 h-5" />
                    </div>
                    <span className="font-bold text-xl tracking-tighter text-slate-900">Vault</span>
                </div>

                <nav className="flex-1 space-y-1.5">
                    <SidebarItem
                        icon={<FileText size={20} />}
                        text="All Notes"
                        active={filter === "all"}
                        onClick={() => setFilter("all")}
                    />
                    <SidebarItem
                        icon={<X size={20} />}
                        text="Twitter / X"
                        active={filter === "twitter"}
                        onClick={() => setFilter("twitter")}
                    />
                    <SidebarItem
                        icon={<Video size={20} />}
                        text="Videos"
                        active={filter === "youtube"}
                        onClick={() => setFilter("youtube")}
                    />
                </nav>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all mt-auto group"
                >
                    <LogOut size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                    <span className="font-semibold">Logout</span>
                </button>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-10 ml-64">
                <header className="flex justify-between items-end mb-12">
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight capitalize">
                            {filter === "all" ? "All Memories" : `${filter}s`}
                        </h1>
                        <p className="text-slate-500 mt-1 font-medium">Manage your digital garden</p>
                    </div>
                    <Button
                        varient="tertiary"
                        onClick={() => setModalOpen(true)}
                        text="Add Content"
                        startIcon={<Plus size={20} />}
                        classExtra="px-7 py-3.5 rounded-2xl shadow-xl shadow-[#bda06d]/25 flex items-center gap-2 hover:-translate-y-1 transition-all active:scale-95"
                    />
                </header>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredContent.length === 0 ? (
                        <div className="col-span-full py-40 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
                            <p className="text-slate-400 font-medium">No {filter} found in your vault.</p>
                        </div>
                    ) : (
                        filteredContent.map((item: any) => (
                            <div key={item._id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group relative overflow-hidden">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-slate-50 rounded-lg text-[#bda06d]">
                                        {item.type === "youtube" ? <Video size={18} /> : <X size={18} />}
                                    </div>
                                    <button
                                        onClick={() => deleteContent(item._id)}
                                        className="text-slate-300 hover:text-red-500 p-1 transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>

                                <h3 className="font-bold text-xl mb-3 text-slate-900 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {item.description || "No extra context added yet..."}
                                </p>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-[#bda06d] hover:text-[#9e865a] transition-colors"
                                >
                                    View Source <ExternalLink size={14} />
                                </a>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

// Sidebar Helper Component
const SidebarItem = ({ icon, text, active, onClick }: { icon: any, text: string, active: boolean, onClick: () => void }) => (
    <div
        onClick={onClick}
        className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl cursor-pointer transition-all duration-300 ${active
                ? "bg-[#bda06d] text-white shadow-lg shadow-[#bda06d]/20 scale-[1.02]"
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
            }`}
    >
        {icon}
        <span className="font-bold text-[15px]">{text}</span>
    </div>
);

export default Dashboard;