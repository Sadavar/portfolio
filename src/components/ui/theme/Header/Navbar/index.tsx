'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
	const pathname = usePathname();

	return (
		<>
			<div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-2">
				<div className="bg-black rounded-full p-1">
					<div className="bg-black space-x-5 border p-5 border-zinc-700 rounded-full w-full sm:w-[600px] flex items-center justify-center">
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
						<a target="_blank" href="https://drive.google.com/file/d/1ErzIe21QbB27Q1lFLXl-Rb7zarypwM96/view" rel="noopener noreferrer"
							className="text-white hover:text-zinc-300 transition-colors duration-75"
						>
							Resume
						</a>
						<a target="_blank" href="https://linkedin.com/in/varunsadasivam" rel="noopener noreferrer">
							<img src="/assets/social/linkedin.png" alt="LinkedIn" className="h-5 w-5" />
						</a>
						<a target="_blank" href="https://github.com/sadavar" rel="noopener noreferrer">
							<img src="/assets/social/github.svg" alt="GitHub" className="h-5 w-5" />
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
