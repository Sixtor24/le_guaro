import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-transparent text-gray-200 py-5 px-16 flex items-center justify-between fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-slate-700 after:opacity-50">
            <div className="flex items-center">
            <Image src="/logo.svg" alt="Logo" width={140} height={140} priority />
            </div>
            <ul className="hidden md:flex space-x-8">
                <li>
                    <Link href="/product">
                    <span className="hover:text-rose uppercase font-manrope font-semibold">DISTRIBUTION</span>
                    </Link>
                </li>
                <li>
                    <Link href="/integrations">
                        <span className="hover:text-rose uppercase font-manrope font-semibold">COVER ART MAKER</span>
                    </Link>
                </li>
                <li>
                    <Link href="/enterprise">
                        <span className="hover:text-rose uppercase font-manrope font-semibold">SERVICES</span>
                    </Link>
                </li>
                <li>
                    <Link href="/camera-to-cloud">
                        <span className="hover:text-rose uppercase font-manrope font-semibold">SMART-LINKS</span>
                    </Link>
                </li>
                <li>
                    <Link href="/resources">
                        <span className="hover:text-rose uppercase font-manrope font-semibold">YOUTUBE VEVO</span>
                    </Link>
                </li>
            </ul>
            <div className="flex items-center space-x-4">
                <Link href="/signin">
                    <span className="hidden md:inline-block hover:text-rose uppercase font-manrope font-semibold">SIGN IN</span>
                </Link>
                <Link href="/start-free-trial">
                    <button className="inline-flex uppercase h-12 animate-shimmer font-manrope font-semibold items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Start Trial Free
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
