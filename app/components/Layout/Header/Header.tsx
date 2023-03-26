import { getSession } from 'next-auth/react';


export const Header = async () => {
	const session = await getSession();

	return <div>Header</div>;
};
