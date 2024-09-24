'use client';
import React from 'react';
import { Menu } from 'lucide-react';

const Sidebar = () => {
	return (
		<div>
			{/*TOP LOGO*/}
			<div className={`flex gap-3 justify-between md:justify-normal items-center pt-8`}>
				<div>LOGO</div>
				<h1 className={`font-extrabold text-2xl`}>STOCK</h1>

				<button
					className={`md:hidden bg-gray-100 rounded-full hover:bg-blue-100 px-3 py-3`}
					onClick={() => {}}
				>
					<Menu className={`w-4 h-4`} />
				</button>
			</div>
			{/*LINKS*/}
			<div className={`flex-grow mt-8`}>{/*LINKS HERE*/}</div>

			{/*FOOTER*/}
			<div>
				<p className={`text-center text-gray-500 text-xs`}>&copy; 2024 STOCK</p>
			</div>
		</div>
	);
};

export default Sidebar;
