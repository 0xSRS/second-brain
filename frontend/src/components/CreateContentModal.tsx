import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import Button from "./Button";

export const CreateContentModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState("youtube");
    const [description, setDescription] = useState(""); // Added missing state
    const [loading, setLoading] = useState(false);

    if (!open) return null;

    const handleSubmit = async () => {
        if (!title || !link) return alert("Please fill in the title and link");
        
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            await axios.post("http://localhost:3000/api/content/v1/add", 
                { title, link, type, description }, 
                { headers: { token } }
            );

            // Reset form fields
            setTitle("");
            setLink("");
            setDescription("");
            setType("youtube");

            onClose(); 
            // Better than reload: Usually you'd call a refresh function passed via props here
        } catch (e) {
            console.error(e);
            alert("Error adding content");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-100 p-4">
            {/* Modal Container */}
            <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl relative animate-in fade-in zoom-in duration-200">
                
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X size={20} />
                </button>

                <h2 className="text-2xl font-black mb-6 text-slate-900 tracking-tight">Add to Vault</h2>
                
                <div className="space-y-5">
                    {/* Title Input */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Title</label>
                        <input 
                            type="text" 
                            placeholder="e.g. Best React Tutorial" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#bda06d]/20 focus:border-[#bda06d] outline-none transition-all"
                        />
                    </div>

                    {/* Link Input */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Link</label>
                        <input 
                            type="text" 
                            placeholder="https://youtube.com/..." 
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#bda06d]/20 focus:border-[#bda06d] outline-none transition-all"
                        />
                    </div>

                    {/* Description Textarea */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Description (Optional)</label>
                        <textarea 
                            placeholder="What is this about?" 
                            value={description}
                            rows={3}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#bda06d]/20 focus:border-[#bda06d] outline-none transition-all resize-none"
                        />
                    </div>

                    {/* Type Select */}
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Content Type</label>
                        <select 
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none cursor-pointer focus:border-[#bda06d] transition-all"
                        >
                            <option value="youtube">YouTube Video</option>
                            <option value="twitter">Twitter / X Post</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <Button 
                        varient="tertiary" 
                        text={loading ? "Saving..." : "Save Memory"} 
                        onClick={handleSubmit} 
                        classExtra="w-full py-4 mt-2 font-bold shadow-xl shadow-[#bda06d]/20"
                    />
                </div>
            </div>
        </div>
    );
};