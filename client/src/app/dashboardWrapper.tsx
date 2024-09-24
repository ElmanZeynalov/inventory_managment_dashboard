import React from 'react';
import Navbar from '@/app/(components)/Navbar';
import Sidebar from '@/app/(components)/Sidebar';

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={`light flex bg-gray-50 min-h-screen w-full`}>
			<Sidebar />
			<main className={`flex flex-col w-full h-full bg-gray-200 px-7 py-9 md:pl-24`}>
				<Navbar />
				{children}
			</main>
		</div>
	);
};

export default DashboardWrapper;
