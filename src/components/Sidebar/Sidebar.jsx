import React from 'react';
import styles from '../../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Sidebar = () => {
	const { list } = useSelector(({ categories }) => categories);
	const categories = list.filter((_, i) => i < 11);

	return (
		<section className={styles.sidebar}>
			<div className={styles.title}>CATEGORIES</div>
			<nav>
				<ul className={styles.menu}>
					{categories.map(({ id, name }) => (
						<li key={id}>
							<NavLink
								className={({ isActive }) =>
									`${styles.link} ${
										isActive ? styles.active : ''
									}`
								}
								to={`/categories/${id}`}>
								{name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
};

export default Sidebar;
