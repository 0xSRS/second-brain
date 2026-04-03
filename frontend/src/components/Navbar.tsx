import {Brain} from "lucide-react"
import {Link} from "react-router-dom"
import Button from "./Button"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-6 bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <Brain className="w-8 h-8 text-[#bda06d]" />
                    <span className="text-2xl font-bold tracking-tight">Second Brain</span>
                </div>
                <div className="flex gap-4">
                    <Link to="/login" >
                        <Button varient="primary" text="Login" />
                    </Link>
                    <Link to="/signup">
                        <Button varient="secondary" text="Sign Up"></Button>
                    </Link>
                </div>
            </nav>
    )
}

export default Navbar