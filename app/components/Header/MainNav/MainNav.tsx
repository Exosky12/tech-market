'use client';

import Link from 'next/link';
import styles from '../../../Styles/header.module.scss';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export const MainNav = () => {
	const [windowWidth, setWindowWidth] = useState<number>(0);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const isMobile = windowWidth < 1180;

	function toggleMenu() {
		const header = document.querySelector('.header');
		header?.classList.toggle('menu-opened');
	}

	return isMobile ? (
		<p>Mobile</p>
	) : (
		<nav className={styles.MainNav}>
			<div className={styles.LeftNav}>
				<Link href=''>Accueil</Link>
				<Link href=''>Bons plans</Link>
				<Link href=''>Meilleures ventes</Link>
				<Link href=''>Nouveautés</Link>
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
		</nav>
	);
};
