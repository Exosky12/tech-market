import styles from '../../../Styles/subNav.module.scss';
import Link from 'next/link';

export const SubNav = () => {
	return (
		<nav className={styles.SubNav}>
			<div className={styles.Links}>
				<Link href=''>MacBook</Link>
				<Link href=''>iMac</Link>
				<Link href=''>Ordinateurs</Link>
				<Link href=''>Pc Gamer</Link>
				<Link href=''>Consoles de jeux</Link>
				<Link href=''>Smartphones</Link>
				<Link href=''>AirPods</Link>
				<Link href=''>Casques</Link>
				<Link href=''>iPad</Link>
				<Link href=''>TV</Link>
			</div>
		</nav>
	);
};
