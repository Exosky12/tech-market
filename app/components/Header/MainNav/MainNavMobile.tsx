import Link from 'next/link';
import styles from '../../../Styles/header.module.scss';
import Image from 'next/image';

type NavProps = {
	menuState: boolean;
	dropDown: boolean;
	toggleMenu: Function;
	toggleDropdown: Function;
};

export const MainNavMobile = ({
	menuState,
	dropDown,
	toggleMenu,
	toggleDropdown,
}: NavProps) => {
	return (
		<div className={styles.window}>
			<div
				className={
					menuState
						? `${styles.headerMobile} + ${styles.menuOpened}`
						: styles.headerMobile
				}>
				<div
					className={styles.burgerContainer}
					onClick={(e) => toggleMenu(e)}>
					<div id={styles.burger}>
						<div className={`${styles.bar} ${styles.topBar}`}></div>
						<div className={`${styles.bar} ${styles.btmBar}`}></div>
					</div>
				</div>
				<ul className={styles.menu}>
					<Link className={styles.menuItem} href=''>
						Accueil
					</Link>
					<Link className={styles.menuItem} href=''>
						Bons plans
					</Link>
					<Link className={styles.menuItem} href=''>
						Meilleures ventes
					</Link>
					<Link className={styles.menuItem} href=''>
						Nouveautées
					</Link>
					<Link className={styles.menuItem} href=''>
						Promotions
					</Link>
					{dropDown ? (
						<Link
							className={`${styles.menuItem} ${styles.dropdown} ${styles.dropwDownOpened}`}
							href=''
							onClick={(e) => toggleDropdown(e)}>
							Tous les produits
							<Image
								src='dropdown.svg'
								alt='Pictogramme de dropdown'
								width={16}
								height={9}
							/>
							<div>
								<Link href=''>MacBook</Link>
								<Link href=''>iMac</Link>
								<Link href=''>Ordinateurs</Link>
								<Link href=''>Pc Gamer</Link>
								<Link href=''>Consoles de jeux</Link>
								<Link href=''>Smartphones</Link>
								<Link href=''>AirPods</Link>
								<Link href=''>Ecouteurs</Link>
								<Link href=''>Casques</Link>
								<Link href=''>iPad</Link>
								<Link href=''>TV</Link>
							</div>
						</Link>
					) : (
						<Link
							className={`${styles.menuItem} ${styles.dropdown}`}
							href=''
							onClick={(e) => toggleDropdown(e)}>
							Tous les produits
							<Image
								src='dropdown.svg'
								alt='Pictogramme de dropdown'
								width={16}
								height={9}
							/>
						</Link>
					)}
				</ul>
			</div>
		</div>
	);
};
