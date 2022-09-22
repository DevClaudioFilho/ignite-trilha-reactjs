import styles from './styles.module.css';
import igniteLogo from '../../assets/ignitelogo.svg';

export function Header() {
	return (
		<header className={styles.header}>
			<img
				src={igniteLogo}
				alt='Logo do ignite feed, dois triagulos verdes subindo '
			/>
			<strong>Ignite Feed</strong>
		</header>
	);
}
