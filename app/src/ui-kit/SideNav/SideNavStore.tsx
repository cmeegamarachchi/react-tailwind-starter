import React from "react";

interface SideNavStoreProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const SideNavContext = React.createContext<SideNavStoreProps>({ open: false, setOpen: () => {}});
SideNavContext.displayName = 'SideNavContext';

export const SideNavContextProvider: React.FC = (props:any) => {
	const [open, setOpen] = React.useState(false);
	return <SideNavContext.Provider value={{ open, setOpen }} {...props} />;
};

export const useSideNav = (): SideNavStoreProps => {
	const context = React.useContext(SideNavContext)

	if (context) {
		return context;
	} else {
		throw Error('SideNav context should be used within Provider');
	}
}