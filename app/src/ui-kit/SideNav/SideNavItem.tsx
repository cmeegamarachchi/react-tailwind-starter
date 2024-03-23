import React from 'react';
import { useSideNav } from './SideNavStore';

interface Props {
	text: string
	icon_url: string;
	icon_alt?: string;
	is_gap?: boolean;
}

const SideNavItem: React.FC<Props> = ({ text, icon_url, icon_alt, is_gap }) => {
	const {open} = useSideNav();
	
	return (
		<li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${(is_gap || false) ? "mt-9" : "mt-2"} } `}>
			<img src={icon_url} alt={icon_alt || 'icon'} />
			<span className={`${!open && "hidden"} origin-left duration-200`}>
				{text}
			</span>
		</li>
	);
};

export default SideNavItem;
