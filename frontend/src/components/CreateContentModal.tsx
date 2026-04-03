import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import Button from "./Button";

export const CreateContentModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState("youtube");

    if (!open) return null;

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem("token");
            await axios.post("http://localhost:3000/api/content/v1/add", 
                { title, link, type }, 
                { headers: { token } }
            );
            onClose(); // Close modal on success
            window.location.reload(); // Refresh to see new content (or use a state update)
        } catch (e) {
            alert("Error adding content");
        }
    };

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[100]">
            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold mb-6 text-slate-900">Add to Brain</h2>
                
                <div className="space-y-4">
                    <input 
                        type="text" placeholder="Title" 
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#bda06d]/20 outline-none"
                    />
                    <input 
                        type="text" placeholder="Link" 
                        onChange={(e) => setLink(e.target.value)}
                        className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#bda06d]/20 outline-none"
                    />
                    <select 
                        onChange={(e) => setType(e.target.value)}
                        className="w-full p-3 border border-slate-200 rounded-xl bg-white outline-none"
                    >
                        <option value="youtube">YouTube</option>
                        <option value="twitter">Twitter / X</option>
                    </select>

                    <Button 
                        varient="tertiary" 
                        text="Submit" 
                        onClick={handleSubmit} 
                        classExtra="w-full py-4 mt-4"
                    />
                </div>
            </div>
        </div>
    );
};