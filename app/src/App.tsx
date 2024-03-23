import { Container, SideNav, SideNavItem, SideNavContextProvider } from "./ui-kit";

const Menus = [
	{ title: "Dashboard", src: "Chart_fill" },
	{ title: "Inbox", src: "Chat" },
	{ title: "Accounts", src: "User", gap: true },
	{ title: "Schedule ", src: "Calendar" },
	{ title: "Search", src: "Search" },
	{ title: "Analytics", src: "Chart" },
	{ title: "Files ", src: "Folder", gap: true },
	{ title: "Setting", src: "Setting" },
];


const AppContext = (props:any) => {
	const { children, ...other } = props;
	return <SideNavContextProvider {...other}>
		{children}
	</SideNavContextProvider>
}

const App = () => {
	return (
		<AppContext>
			<Container>
				<SideNav>
				{Menus.map((menu, index) => 
					<SideNavItem
						key={index}
						icon_url={`/assets/${menu.src}.png`}
						icon_alt={menu.src}
						text={menu.title}
						is_gap={menu.gap}
					/>
				)}
				</SideNav>
				<div className="h-screen flex-1 p-7">
					<h1 className="text-2xl font-semibold ">Home Page</h1>
				</div>
			</Container >
		</AppContext>
	);
};
export default App;