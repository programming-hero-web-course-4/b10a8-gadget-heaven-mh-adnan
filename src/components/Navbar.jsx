import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/statistic">Statistic</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">Gadget</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className="btn btn-ghost">Home</Link></li>
                    <li><Link to="/statistic" className="btn btn-ghost">Statistic</Link></li>
                    <li><Link to="/dashboard" className="btn btn-ghost">Dashboard</Link></li>
                </ul>
            </div>

            <div className="navbar-end flex gap-2">
                <Link to="/cart" className="btn btn-outline">Cart</Link>
                <Link to="/whitelist" className="btn btn-outline">Whitelist</Link>
            </div>
        </div>
    );
};

export default Navbar;
