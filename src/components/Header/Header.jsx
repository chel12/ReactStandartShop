import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.jpg';
import styles from '../../styles/Header.module.css';
import { toggleForm } from '../../features/user/userSlice';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [values, setValues] = useState({ name: 'Guest', avatar: AVATAR });

	const { currentUser } = useSelector(({ user }) => user);

	const handleClick = () => {
		if (!currentUser) dispatch(toggleForm(true));
		else navigate(ROUTES.PROFILE);
	};

	useEffect(() => {
		if (!currentUser) return;
		setValues(currentUser);
	}, [currentUser]);
	
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt="logo" />
				</Link>
			</div>
			<div className={styles.info}>
				<div className={styles.user} onClick={handleClick}>
					<div
						className={styles.avatar}
						style={{ backgroundImage: `url(${values.avatar})` }}
					/>
					<div className={styles.username}>{values.name}</div>
				</div>
				<form className={styles.form}>
					<div className={styles.icon}>
						<svg className="icon">
							<use
								xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}
							/>
						</svg>
					</div>
					<div className={styles.input}>
						<input
							type="search"
							name="search"
							placeholder="Search for any..."
							autoComplete="off"
							onChange={() => {}}
							value=""
						/>
					</div>
					{false && <div className={styles.box}></div>}
				</form>
				<div className={styles.account}>
					<Link to={ROUTES.HOME} className={styles.favourites}>
						<svg className={styles['icon-fav']}>
							<use
								xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}
							/>
						</svg>
					</Link>
					<Link to={ROUTES.CART} className={styles.cart}>
						<svg className={styles['icon-cart']}>
							<use
								xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}
							/>
						</svg>
						<span className={styles.count}>2</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
