import React, { useCallback, useMemo, useState } from 'react'
import { Dashboard, GirlSmiling, Hamburger, Home, Logo, Logout, NavFooterAvatar, Projects, Reporting, Search, SettingIcon, Support, Tasks, UsersIcon } from '../../assets'

const DesktopSidebar = () => {
	const [showNavbar, setShowNavbar] = useState(false)

	const getNavItems = useCallback( (label, link, icon, hasTag= false, tagContent) => ({
		label,
		link,
		icon,
		hasTag,
		tagContent,
	}),[])

	const navItems = useMemo( () => ([
		getNavItems('Home', 'home', <Home />),
		getNavItems('Dashboard', 'dashboard', <Dashboard />, true, 10),
		getNavItems('Projects', 'projects', <Projects />),
		getNavItems('Tasks', 'tasks', <Tasks />),
		getNavItems('Reporting', 'reporting', <Reporting />),
		getNavItems('Users', 'users', <UsersIcon />),
	]),[])

	const navItems_2 = useMemo(() => ([
		getNavItems('Support', 'support', <Support />),
		getNavItems('Settings', 'settings', <SettingIcon />),
	]))

  return (
		<div>

			<div
				className="bg-white p-2 text-black flex justify-between md:hidden fixed w-full z-20 top-0 left-0"
				onClick={() => setShowNavbar(s => !s)}
			>
				<div className={`flex ${showNavbar ? 'invisible' : 'visible'} justify-between items-center`}>
					<img src={Logo} alt="untitled_logo" />
					<a href="#" className="block p-4 text-xl font-bold">Untitled UI</a>
				</div>

				<button className="mobile-menu-button p-4 focus:outline-none focus:border focus:border-[rgba(52,64,84,0.2)]" data-collapse-toggle="navbar-sticky" aria-controls="navbar-sticky" aria-expanded="false">
					<Hamburger />
				</button>
			</div>


			<aside className={`w-[280px] z-50 border-r-[1px] border-[rgba(52,64,84,0.2)] border-solid absolute inset-y-0 left-0 ${showNavbar ? 'transform -translate-x-0 right-0' : 'transform -translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`} aria-label="Sidebar">
				<div className='px-5 my-6 flex justify-between items-center w-48'>
					<img src={Logo} alt="untitled_logo" />
					<span className='text-xl font-semibold'>Untitled UI</span>
				</div>
				<div className="px-5 pt-1 pb-20 overflow-y-auto rounded bg-[#fff] h-screen">
					

					<ul className="space-y-2">
						<div className="w-[170px] flex relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<Search />
							</div>
							<input type="text" id="simple-search" className="bg-[#fff] border border-gray-300 outline-0 text-black text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full pl-10 p-2.5" placeholder="Search" required />
						</div>
						{
							navItems?.map((item, index) => (
								<li key={index}>
									<a href="#" className="flex items-center p-2 text-base font-medium text-[#344054] rounded-lg dark:text-white cursor-pointer hover:bg-[#f5f5f5] hover:rounded-md">
										{item?.icon}
										<span className="flex-1 font-medium ml-3 whitespace-nowrap text-[#344054]">{item?.label}</span>
										{
											item?.hasTag &&
											<span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-[#344054] bg-[#F2F4F7] rounded-2xl">{item?.tagContent}</span>
										}
									</a>
								</li>
							))
						}
					</ul>

					<ul className="space-y-2 mt-5">
						{
							navItems_2?.map((item, index) => (
								<li key={index}>
									<a href="#" className="flex items-center p-2 text-base font-medium text-[#344054] rounded-lg dark:text-white cursor-pointer hover:bg-[#f5f5f5] hover:rounded-md">
										{item?.icon}
										<span className="flex-1 font-medium ml-3 whitespace-nowrap text-[#344054]">{item?.label}</span>
										{
											item?.hasTag &&
											<span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-[#344054] bg-[#F2F4F7] rounded-2xl">{item?.tagContent}</span>
										}
									</a>
								</li>
							))
						}
					</ul>

					<div className="space-y-3 py-5 px-2 my-5 bg-[#F9FAFB]">
						<h6 className="text-sm font-medium text-[#101828] leading-4">
							New features available!
						</h6>
						<p className='text-sm text-[#667085]'>
							Check out the new dashboard view. Pages now load faster. 
						</p>
						<img
							src={GirlSmiling}
							alt="girl-smiling"
							className='rounded-md w-[200px] h-[140px]'
						/>
						<div className="flex justify-between items-center w-[90%]">
							<p className="text-sm font-semibold leading-5 text-[#667085]">Dismiss</p>
							<p className="text-sm font-semibold leading-5 text-[#6941C6]">What's new?</p>
						</div>
					</div>

					<div className='space-x-3 py-5 px-2 mt-5 border-t-2 border-[rgba(52,64,84,0.1)]'>
						<div className="flex justify-between items-center">
							<div>{<NavFooterAvatar />}</div>

							<div className='mx-3'>
								<p className="text-sm font-semibold text-[#101828]">Olivia Rhye</p>
								<p className="text-sm font-normal text-[#667085]">olivia@untitledui.com</p>
							</div>

							<div className='cursor-pointer'>{<Logout />}</div>
						</div>
					</div>

				</div>
			</aside>
		</div>
  )
}

export {DesktopSidebar}