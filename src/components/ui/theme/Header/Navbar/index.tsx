'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <div className="w-screen flex items-center justify-center pt-2">
        <div className="bg-transparent space-x-5 border p-5 border-zinc-700 rounded-full w-full sm:w-[600px] flex items-center justify-center">
          <Link
            href={`${pathname}#about`}
            className="text-white hover:text-zinc-300 transition-colors duration-75"
            scroll
          >
            About
          </Link>
          <Link
            href={`${pathname}#projects`}
            className="text-white hover:text-zinc-300 transition-colors duration-75"
            scroll
          >
            Projects
          </Link>
          <Link
            href={`${pathname}#contact`}
            className="text-white hover:text-zinc-300 transition-colors duration-75"
            scroll
          >
            Contact
          </Link>
        </div>
      </div >
    </>
  );

}
export default Navbar;
