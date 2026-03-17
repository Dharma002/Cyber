import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <Link to="/" className="flex items-center gap-2">
        <Shield className="text-blue-900 w-8 h-8" />
        <span className="text-xl font-black text-blue-900">CRIMEX</span>
      </Link>
      <div className="flex gap-8 font-bold text-xs uppercase tracking-widest text-slate-600">
        <Link to="/" className="hover:text-blue-900 transition">Home</Link>
        <Link to="/about" className="hover:text-blue-900 transition">About</Link>
        <Link to="/courses" className="hover:text-blue-900 transition">Courses</Link>
        <Link to="/internship" className="hover:text-red-600 transition">Internship</Link>
      </div>
    </nav>
  );
};

export default Header;