import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-transparent text-gray-400 py-5 px-16 flex items-center justify-between fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-slate-700 after:opacity-50">
            <div className="flex items-center">
                <Image src="/logo.svg" alt="Logo" width={140} height={140} />
            </div>
            <ul className="hidden md:flex space-x-8">
                <li>
                    <Link href="/product">
                        <span className="hover:text-gray-200">Distribution</span>
                    </Link>
                </li>
                <li>
                    <Link href="/integrations">
                        <span className="hover:text-gray-200">Cover Art Maker</span>
                    </Link>
                </li>
                <li>
                    <Link href="/enterprise">
                        <span className="hover:text-gray-200">Services</span>
                    </Link>
                </li>
                <li>
                    <Link href="/camera-to-cloud">
                        <span className="hover:text-gray-200">Smart-Links</span>
                    </Link>
                </li>
                <li>
                    <Link href="/resources">
                        <span className="hover:text-gray-200">Youtube Vevo</span>
                    </Link>
                </li>
            </ul>
            <div className="flex items-center space-x-4">
                <Link href="/signin">
                    <span className="hidden md:inline-block hover:text-gray-200">Sign In</span>
                </Link>
                <Link href="/start-free-trial">
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-3xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Start Trial Free
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
