import Link from 'next/link';
import styles from '../../../Styles/header.module.scss';
import Image from 'next/image';
import search from '../../../../public/search.svg';

export const MainNav = () => {
	return (
		<nav className={styles.MainNav}>
			<div className={styles.LeftNav}>
				<Link href=''>Accueil</Link>
				<Link href=''>Bons plans</Link>
				<Link href=''>Meilleures ventes</Link>
				<Link href=''>Nouveautées</Link>
				<Link href=''>Promotions</Link>
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
          <Link href="">
          <Image
            src='cart.svg'
            alt='Pictogramme de panier'
            width={32}
            height={32}
          />
          </Link>
          <Link href="">
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
		</nav>
	);
};
