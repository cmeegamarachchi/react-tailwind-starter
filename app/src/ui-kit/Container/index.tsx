import React, { ReactNode, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

const Container: React.FC<Props> = ({ children, ...rest }) => {
	return (
		<div className="flex" {...rest}>{children}</div>
	)
}

export default Container