import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Brain, User, Lock, Mail } from "lucide-react";
import Button from "../components/Button";

const SignupPage = () => {
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Updated to hit your v1/signup route
            await axios.post("http://localhost:3000/api/auth/v1/signup", {
                name,
                email,
                password
            });

            // Redirect to login after successful registration
            // alert("Account created successfully! Please login.");
            navigate("/login");
        } catch (error) {
            console.error("Signup failed:", error);
            alert("Something went wrong. Username or email might already be taken.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
            {/* Background decorative glow - placed on the opposite side for variety */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#bda06d]/5 blur-[120px] rounded-full -z-10" />
            
            <div className="w-full max-w-md bg-white border border-slate-200 p-10 rounded-2xl shadow-xl shadow-slate-200/50">
                <div className="flex flex-col items-center mb-8">
                    <Link to="/" className="flex items-center gap-2 mb-4">
                        <Brain className="w-10 h-10 text-[#bda06d]" />
                        <span className="text-2xl font-bold text-slate-900 tracking-tighter">Second Brain</span>
                    </Link>
                    <h2 className="text-2xl font-bold text-slate-900">Create Account</h2>
                    <p className="text-slate-500 mt-1">Start building your digital vault today</p>
                </div>

                <form onSubmit={handleSignup} className="space-y-4">
                    {/* Username Field */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Username</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                                type="text" 
                                required
                                value={name}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#bda06d]/20 focus:border-[#bda06d] transition-all"
                                placeholder="Your unique name"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#bda06d]/20 focus:border-[#bda06d] transition-all"
                                placeholder="name@example.com"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                                type="password" 
                                required
                                minLength={6}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#bda06d]/20 focus:border-[#bda06d] transition-all"
                                placeholder="Min. 6 characters"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button 
                            varient="tertiary" 
                            text={loading ? "Creating Account..." : "Sign up"} 
                            classExtra="w-full py-4 flex justify-center items-center shadow-lg shadow-[#bda06d]/20"
                        />
                    </div>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                    <p className="text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link to="/login" className="text-[#bda06d] font-bold hover:underline">
                            Login instead
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage