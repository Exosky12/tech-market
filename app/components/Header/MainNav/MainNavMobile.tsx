import Link from 'next/link';
import styles from '../../../Styles/mainNav.module.scss';
import Image from 'next/image';

type NavProps = {
	menuState: boolean;
	toggleMenu: Function;
};

export const MainNavMobile = ({ menuState, toggleMenu }: NavProps) => {
	return (
		<div className={styles.mobileContainer}>
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
					<Link className={styles.menuItem} href=''>
						Tous les produits
					</Link>
				</ul>
			</div>
			<div className={styles.RightNav}>
				<div className={styles.SearchContainer}>
					<Image
						src='search.svg'
						alt='Pictogramme de recherche'
						width={32}
						height={32}
					/>
					<input
						className={styles.SearchInput}
						type='search'
						placeholder='Essayez iPhone13, AirPods Pro, PS5,...'
					/>
				</div>
				<div className={styles.RightNavIcons}>
					<Link href=''>
						<Image
							src='cart.svg'
							alt='Pictogramme de panier'
							width={32}
							height={32}
						/>
					</Link>
					<Link href=''>
						<Image
							src='favorite.svg'
							alt='Pictogramme des favoris'
							width={32}
							height={32}
						/>
					</Link>
					<button className={styles.account}></button>
				</div>
			</div>
		</div>
	);
};
