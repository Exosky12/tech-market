'use client';

import Link from 'next/link';
import styles from '../../../Styles/header.module.scss';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

export const MainNav = () => {
	const [windowWidth, setWindowWidth] = useState(0);
	const [menuState, setMenuState] = useState(false);
	const [dropDown, setdropDown] = useState(false);

	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		const header = document.querySelector('.header');
		if (header) {
			if (menuState) {
				header.classList.add('menuOpened');
			} else {
				header.classList.remove('menuOpened');
			}
		}
	}, [menuState]);

	const isMobile = windowWidth < 1180;

	const toggleMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setMenuState(!menuState);
	};

	const toggleDropdown = () => {
		setdropDown(!dropDown);
	};

	return isMobile ? (
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
							onClick={toggleDropdown}>
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
							onClick={toggleDropdown}>
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
