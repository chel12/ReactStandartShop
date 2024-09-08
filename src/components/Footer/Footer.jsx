import React from 'react';
import styles from '../../styles/Footer.module.css';
import LOGO from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const Footer = () => {
	return (
		<section className={styles.footer}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt="logo" />
				</Link>
			</div>
			<div className={styles.rights}>Developed by Sima4</div>
			<div className={styles.socials}>
				<a href="instagram" target="_blank">
					<svg className={'icon'}>
						<use
							xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}
						/>
					</svg>
				</a>
				<a href="facebook" target="_blank">
					<svg className={'icon'}>
						<use
							xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}
						/>
					</svg>
				</a>
				<a href="youtube" target="_blank">
					<svg className={'icon'}>
						<use
							xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}
						/>
					</svg>
				</a>
			</div>
		</section>
	);
};

export default Footer;
