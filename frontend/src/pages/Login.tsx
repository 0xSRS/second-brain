import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Brain, Lock, Mail, ArrowRight } from "lucide-react";
import Button from "../components/Button";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:3000/api/auth/v1/login", {
                email,
                password
            });

            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            console.error("Login failed:", error);
            alert("Invalid credentials. Check your email or password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
            {/* Soft decorative glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#bda06d]/5 blur-[120px] rounded-full -z-10" />
            
            <div className="w-full max-w-md bg-white border border-slate-200 p-10 rounded-2xl shadow-xl shadow-slate-200/50">
                <div className="flex flex-col items-center mb-10">
                    <Link to="/" className="flex items-center gap-2 mb-6">
                        <Brain className="w-10 h-10 text-[#bda06d]" />
                        <span className="text-2xl font-bold text-slate-900 tracking-tighter">Second Brain</span>
                    </Link>
                    <h2 className="text-2xl font-bold text-slate-900">Welcome back</h2>
                    <p className="text-slate-500 mt-1">Please enter your details</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#bda06d]/20 focus:border-[#bda06d] transition-all"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                                type="password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#bda06d]/20 focus:border-[#bda06d] transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <div className="pt-2">
                        <Button 
                            varient="tertiary" 
                            text={loading ? "Logging in..." : "Sign in"} 
                            classExtra="w-full py-4 flex justify-center items-center gap-2 shadow-lg shadow-[#bda06d]/20"
                        />
                    </div>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-500">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-[#bda06d] font-bold hover:underline">
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};


export default LoginPage