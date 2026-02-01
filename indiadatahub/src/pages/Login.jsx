import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import Navbar from '../components/Navbar';

const Login = () => {
    const navigate = useNavigate();
    const THEME = { navy: "#1e1b4b", borderGray: "#c4c4c4", linkBlue: "#3f51b5" };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar isLoginPage={true} />

            <div className="flex-1 flex flex-col items-center justify-center px-4 pb-32">
                <div
                    style={{ backgroundColor: THEME.navy }}
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-sm"
                >
                    <Lock className="text-white" size={24} />
                </div>
                <h1 className="text-[24px] font-normal text-gray-800 mb-10">Sign in</h1>

                <form className="w-full max-w-sm flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email address *"
                        className="w-full px-3 py-4 border rounded focus:border-blue-500 outline-none text-[15px]"
                        style={{ borderColor: THEME.borderGray }}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password *"
                        className="w-full px-3 py-4 border rounded focus:border-blue-500 outline-none text-[15px]"
                        style={{ borderColor: THEME.borderGray }}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-black text-white text-[14px] font-medium rounded shadow hover:bg-gray-800 tracking-wide"
                    >
                        Sign In
                    </button>

                    <div className="flex justify-between items-center mt-2">
                        <a href="#" style={{ color: THEME.linkBlue }} className="text-[13px] hover:underline">
                            Forgot password?
                        </a>
                        <a href="#" style={{ color: THEME.linkBlue }} className="text-[13px] hover:underline">
                            Don't have an account? Sign Up
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;