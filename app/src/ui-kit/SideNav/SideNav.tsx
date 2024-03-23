import React, { ReactNode } from 'react'
import { useSideNav } from './SideNavStore'

interface Props {
	children: ReactNode
}

const Logo: React.FC<{ is_open: boolean }> = ({ is_open }) => <img src="/assets/logo.png"
	className={`cursor-pointer duration-500 ${is_open && "rotate-[360deg]"}`}
	alt="logo" />

const Title: React.FC<{ is_open: boolean }> = ({ is_open }) => 
<h1 className={`text-white origin-left font-medium text-xl duration-200 ${!is_open && "scale-0"}`}>
	Designer
</h1>

const SideNav: React.FC<Props> = ({ children }) => {

	const {open, setOpen} = useSideNav();

	return <div className={`${open ? "w-72" : "w-20 "} bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
		<img
			src="/assets/control.png"
			className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
			onClick={() => setOpen(!open)} alt="control"
		/>
		<div className="flex gap-x-4 items-center">
			<Logo is_open={open} />
			<Title is_open={open} />
		</div>
		<ul className="pt-6">
			{children}
		</ul>
	</div>
}

export default SideNav