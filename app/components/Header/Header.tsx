import { getSession } from 'next-auth/react';
import styles from '../../Styles/header.module.scss'
import { MainNav } from './MainNav/MainNav';
import { SubNav } from './SubNav/SubNav';

export const Header = async () => {
	const session = await getSession();

	return (
		<header className={styles.header}>
			<MainNav />
			<SubNav />
		</header>
		)
};
